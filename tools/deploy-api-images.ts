import AWS from "aws-sdk";

import {
  AWS_REGION,
  getEcrRegistryUrl,
  LAMBDA_EXECUTION_ROLE,
  loginToEcr,
} from "./aws";
import { getApiRoutes, getImageNameForRoute, getImageTag } from "./api-utils";
import execa from "execa";

const getLambda = async (lambda: AWS.Lambda, lambdaName: string) => {
  try {
    return await lambda
      .getFunctionConfiguration({ FunctionName: lambdaName })
      .promise();
  } catch (err) {
    if (err.code === "ResourceNotFoundException") {
      return null;
    }
    throw err;
  }
};

const deployApiLambda = async (
  routePath: string,
  context: { ecrRegistryUrl: string; imageTag: string; lambda: AWS.Lambda }
) => {
  // Get the image name for this route
  const { name: imageName, hash: routeHash } = getImageNameForRoute(routePath);

  // Tag the image with our registry URL and push it to ECR
  const taggedImageName = `${imageName}:${context.imageTag}`;
  const ecrImageName = `${context.ecrRegistryUrl}/${taggedImageName}`;
  await execa("docker", ["tag", taggedImageName, ecrImageName]);
  await execa("docker", ["push", ecrImageName]);

  // Create or update a lambda for this api route
  const lambdaName = `marketing-api-${routeHash}`;
  const existingLambda = await getLambda(context.lambda, lambdaName);

  const lambdaEnvironmentVariables = {
    // This will forward environment variables from GitHub secrets
    // into the underlying Lambda environment. This list is currently
    // hardcoded.
    // TODO: is there a more generic way to do this?
    SLACK_TOKEN: process.env.SLACK_TOKEN as string,
  };

  if (existingLambda) {
    // We need to update the lambda configuration to reflect the newest image
    // and any environment variables
    await context.lambda
      .updateFunctionConfiguration({
        FunctionName: lambdaName,
        Environment: { Variables: lambdaEnvironmentVariables },
      })
      .promise();
    await context.lambda
      .updateFunctionCode({ FunctionName: lambdaName, ImageUri: ecrImageName })
      .promise();
  } else {
    // We need to create a brand-new lambda function
    await context.lambda
      .createFunction({
        FunctionName: lambdaName,
        Role: LAMBDA_EXECUTION_ROLE,
        Code: {
          ImageUri: ecrImageName,
        },
        Environment: {
          Variables: lambdaEnvironmentVariables,
        },
      })
      .promise();
  }
};

const cleanUpLambdas = async (apiRoutes: Record<string, string>) => {
  // TODO: remove unused lambda functions
};

export const deployApiImages = async () => {
  const apiRoutes = await getApiRoutes();

  // Do this once for all images
  await loginToEcr();

  // Compute these once to save time during individual deployments
  const lambda = new AWS.Lambda({ region: AWS_REGION });
  const ecrRegistryUrl = await getEcrRegistryUrl();
  const imageTag = await getImageTag();

  await Promise.all(
    Object.keys(apiRoutes).map(async (routePath) =>
      deployApiLambda(routePath, { ecrRegistryUrl, imageTag, lambda })
    )
  );

  await cleanUpLambdas(apiRoutes);
};

if (require.main === module) {
  deployApiImages().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

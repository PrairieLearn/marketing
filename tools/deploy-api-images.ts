import AWS from "aws-sdk";

import {
  AWS_REGION,
  getEcrRegistryUrl,
  LAMBDA_EXECUTION_ROLE,
  loginToEcr,
} from "./aws";
import { getApiRoutes, getImageNameForRoute, getImageTag } from "./api-utils";
import execa from "execa";

const ensureEcrRepository = async (repositoryName: string) => {
  const ecr = new AWS.ECR({ region: AWS_REGION });
  try {
    await ecr
      .describeRepositories({ repositoryNames: [repositoryName] })
      .promise();
  } catch (err) {
    if (err.code === "RepositoryNotFoundException") {
      // Need to create a new repository
      console.log(`Creating ECR repository: ${repositoryName}`);
      await ecr.createRepository({ repositoryName }).promise();
    }
  }
};

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

  // Ensure we have a repository to push to - ECR doesn't create them
  // automatically if they don't exist
  await ensureEcrRepository(imageName);

  // Tag the image with our registry URL and push it to ECR
  const taggedImageName = `${imageName}:${context.imageTag}`;
  const ecrImageName = `${context.ecrRegistryUrl}/${taggedImageName}`;

  console.log(`Tagging ${taggedImageName} as ${ecrImageName}`);
  await execa("docker", ["tag", taggedImageName, ecrImageName]);

  console.log(`Pushing ${ecrImageName} to ECR`);
  await execa("docker", ["push", ecrImageName]);

  // Create or update a lambda for this api route
  const lambdaName = `marketing-api-${routeHash}`;
  const existingLambda = await getLambda(context.lambda, lambdaName);

  const lambdaEnvironmentVariables = {
    // This will forward environment variables from GitHub secrets
    // into the underlying Lambda environment. This list is currently
    // hardcoded.
    // TODO: is there a more generic way to do this?
    SLACK_WEBHOOK_CONTACT_US: process.env.SLACK_WEBHOOK_CONTACT_US as string,
  };

  if (existingLambda) {
    // We need to update the lambda configuration to reflect the newest image
    // and any environment variables
    console.log(`Updating existing lambda: ${lambdaName}`);
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
    console.log(`Creating new lambda: ${lambdaName}`);
    await context.lambda
      .createFunction({
        FunctionName: lambdaName,
        PackageType: "Image",
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

  // TODO: in the future we could probably clean up unused API lambdas here.
};

if (require.main === module) {
  deployApiImages().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

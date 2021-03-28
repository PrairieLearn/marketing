import AWS from "aws-sdk";
import { getApiRoutes, getImageNameForRoute } from "./api-utils";
import { AWS_REGION, API_GATEWAY_ID, getAwsAccountId } from "./aws";

const createIntegration = async (
  apiGateway: AWS.ApiGatewayV2,
  lambdaArn: string
) => {
  const integration = await apiGateway
    .createIntegration({
      ApiId: API_GATEWAY_ID,
      IntegrationType: "AWS_PROXY",
      IntegrationUri: lambdaArn,
    })
    .promise();

  return { lambdaArn, integrationId: integration.IntegrationId };
};

export const deployApiGateway = async () => {
  const apiRoutes = await getApiRoutes();

  const apiGateway = new AWS.ApiGatewayV2({ region: AWS_REGION });

  const routes = await apiGateway
    .getRoutes({ ApiId: API_GATEWAY_ID })
    .promise();

  const integrations = await apiGateway
    .getIntegrations({ ApiId: API_GATEWAY_ID })
    .promise();

  const accountId = await getAwsAccountId();

  // Build a list of all the "integrations" we'll need
  // This is a mapping from route path to AWS Lambda ARNs
  const neededIntegrations = Object.keys(apiRoutes).reduce((acc, routePath) => {
    const { hash } = getImageNameForRoute(routePath);
    return {
      ...acc,
      [routePath]: `arn:aws:lambda:${AWS_REGION}:${accountId}:function:marketing-api-${hash}`,
    };
  }, {} as Record<string, string>);

  // Determine which ones must be created
  const missingIntegrations = Object.values(neededIntegrations).filter(
    (lambdaArn) =>
      !integrations.Items?.some(
        ({ IntegrationUri }) => IntegrationUri === lambdaArn
      )
  );

  // Create missing integrations
  const newIntegrations = await Promise.all(
    missingIntegrations.map(async (lambdaArn) =>
      createIntegration(apiGateway, lambdaArn)
    )
  );

  console.log(routes);
  console.log(integrations);
};

if (require.main === module) {
  deployApiGateway().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

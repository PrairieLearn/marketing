import AWS from "aws-sdk";
import { getApiRoutes, getImageNameForRoute } from "./api-utils";
import { AWS_REGION, API_GATEWAY_ID, getAwsAccountId } from "./aws";

const OPTIONAL_CATCH_ALL_REGEX = /^\[\[\.\.\.([\w-]+)\]\]$/;
const CATCH_ALL_REGEX = /^\[\.\.\.([\w-]+)\]$/;
const DYNAMIC_REGEX = /^\[([\w-]+)\]$/;

const createIntegration = async (
  apiGateway: AWS.ApiGatewayV2,
  lambdaArn: string
) => {
  console.log(`Creating integration for ${lambdaArn}`);
  const integration = await apiGateway
    .createIntegration({
      ApiId: API_GATEWAY_ID,
      IntegrationType: "AWS_PROXY",
      IntegrationUri: lambdaArn,
      // I believe this is correct, but if APIs ever start needing query
      // parameters and things don't work as expected, we might have to change
      // this to 1.0.
      PayloadFormatVersion: "2.0",
    })
    .promise();

  return { lambdaArn, integrationId: integration.IntegrationId };
};

const createRoute = async (
  apiGateway: AWS.ApiGatewayV2,
  routeKey: string,
  integrationId: string
) => {
  console.log(`Creating route ${routeKey} with integration ${integrationId}`);
  try {
    const route = await apiGateway
      .createRoute({
        ApiId: API_GATEWAY_ID,
        RouteKey: routeKey,
        Target: `integrations/${integrationId}`,
      })
      .promise();

    return { routeKey, routeId: route.RouteId };
  } catch (err) {
    console.error(`Could not create route ${routeKey}`);
    throw err;
  }
};

const updateLambdaPermissions = async (
  lambda: AWS.Lambda,
  accountId: string,
  lambdaArn: string
) => {
  try {
    await lambda
      .addPermission({
        FunctionName: lambdaArn,
        StatementId: "APIGatewayInvoke",
        Action: "lambda:InvokeFunction",
        Principal: "apigateway.amazonaws.com",
        SourceArn: `arn:aws:execute-api:us-east-2:${accountId}:${API_GATEWAY_ID}/*`,
      })
      .promise();
  } catch (err) {
    // Most of the time, this permission will already exist. If it does,
    // we'll get the following error code, which we can safely ignore.
    if (err.code !== "ResourceConflictException") {
      throw err;
    }
  }
};

const deleteIntegration = async (
  apiGateway: AWS.ApiGatewayV2,
  integrationId: string
) => {
  console.log(`Deleting integration ${integrationId}`);
  await apiGateway
    .deleteIntegration({
      ApiId: API_GATEWAY_ID,
      IntegrationId: integrationId,
    })
    .promise();
};

const deleteRoute = async (apiGateway: AWS.ApiGatewayV2, routeId: string) => {
  console.log(`Deleting route ${routeId}`);
  await apiGateway
    .deleteRoute({
      ApiId: API_GATEWAY_ID,
      RouteId: routeId,
    })
    .promise();
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

  // Create a combined list of integrations for the next phase
  // This maps Lambda ARNs to the corresponding integration ID
  const allIntegrations = {
    ...integrations.Items?.reduce(
      (acc, integration) => ({
        ...acc,
        [integration.IntegrationUri || "NONE"]: integration.IntegrationId,
      }),
      {} as Record<string, string | undefined>
    ),
    ...newIntegrations.reduce(
      (acc, integration) => ({
        ...acc,
        [integration.lambdaArn]: integration.integrationId,
      }),
      {} as Record<string, string | undefined>
    ),
  };

  // We also need to ensure that all of our lambdas are able to be invoked by
  // API Gateway.
  const lambda = new AWS.Lambda({ region: AWS_REGION });
  await Promise.all(
    Object.values(neededIntegrations).map((lambdaArn) =>
      updateLambdaPermissions(lambda, accountId, lambdaArn)
    )
  );

  // Build a list of all the routes we'll need
  // Starting with Next.js route syntax, we'll convert it into what API Gateway expects
  const neededRoutes = Object.keys(apiRoutes).map((routePath) => {
    const transformedRoute = routePath
      .split("/")
      .map((pathSegment) => {
        if (OPTIONAL_CATCH_ALL_REGEX.test(pathSegment)) {
          const segmentName = OPTIONAL_CATCH_ALL_REGEX.exec(pathSegment)?.[1];
          return `{${segmentName}+}`;
        } else if (CATCH_ALL_REGEX.test(pathSegment)) {
          const segmentName = CATCH_ALL_REGEX.exec(pathSegment)?.[1];
          return `{${segmentName}+}`;
        } else if (DYNAMIC_REGEX.test(pathSegment)) {
          const segmentName = DYNAMIC_REGEX.exec(pathSegment)?.[1];
          return `{${segmentName}}`;
        }
        return pathSegment;
      })
      .join("/");

    return {
      routePath,
      routeKey: `ANY ${transformedRoute}`,
    };
  });

  const missingRoutes = neededRoutes.filter(
    ({ routeKey }) =>
      !routes.Items?.some(({ RouteKey }) => RouteKey === routeKey)
  );

  const newRoutes = await Promise.all(
    missingRoutes.map(async ({ routeKey, routePath }) => {
      // Map the route path to a lambda ARN
      const lambdaArn = neededIntegrations[routePath];

      // Map the lambda ARN to an integration
      const integrationId = allIntegrations[lambdaArn];
      if (!integrationId) {
        throw new Error(`Could not determine integration ID for ${lambdaArn}`);
      }

      // Create a new route with the route key and integration
      return await createRoute(apiGateway, routeKey, integrationId);
    })
  );

  // Build a set of all route IDs for the next step
  const allRouteKeys = [
    ...(routes.Items?.map((route) => route.RouteId) ?? []),
    ...newRoutes.map((route) => route.routeId),
  ];

  // Now we need to clean up after ourselves, i.e. remove all unused routes
  // and integrations. All newly-created routes are guaranteed to be valid,
  // so we just have to consider the original set of routes and integrations
  // and remove them.
  const allUsedIntegrationUris = Object.values(neededIntegrations);
  const allUsedRouteKeys = neededRoutes.map(({ routeKey }) => routeKey);
  const unusedIntegrations =
    integrations.Items?.filter(
      (integration) =>
        !allUsedIntegrationUris.some(
          (integrationUri) => integration.IntegrationUri === integrationUri
        )
    ) ?? [];
  const unusedRoutes =
    routes.Items?.filter(
      (route) =>
        !allUsedRouteKeys.some((routeKey) => route.RouteKey === routeKey)
    ) ?? [];

  // Important: we need to delete the routes before we delete the integrations,
  // as we can't delete an integration while it's still referenced by a route.
  if (unusedRoutes.length > 0) {
    console.log("Deleting unused routes");
    await Promise.all(
      unusedRoutes.map(async ({ RouteId }) => {
        if (RouteId) {
          await deleteRoute(apiGateway, RouteId);
        }
      })
    );
  }

  if (unusedIntegrations.length > 0) {
    console.log("Deleting unused integration");
    await Promise.all(
      unusedIntegrations.map(async ({ IntegrationId }) => {
        if (IntegrationId) {
          await deleteIntegration(apiGateway, IntegrationId);
        }
      })
    );
  }
};

if (require.main === module) {
  deployApiGateway().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

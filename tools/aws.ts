import AWS from "aws-sdk";
import execa from "execa";

export const AWS_REGION = "us-east-2";
export const CLOUDFRONT_DISTRIBUTION_ID = "E2O86FEUUQ9OA4";
export const API_GATEWAY_ID = "mxypxe62o6";
export const S3_BUCKET_NAME = "prairielearn-marketing-prod";
export const LAMBDA_EXECUTION_ROLE =
  "arn:aws:iam::769954110362:role/marketing-api-lambda-role";

export const getAwsAccountId = async () => {
  const sts = new AWS.STS({ region: AWS_REGION });
  const { Account: accountId } = await sts.getCallerIdentity().promise();
  return accountId;
};

export const getEcrRegistryUrl = async () => {
  // ECR registries are tied to account IDs. Determine the account ID dynamically
  // based on the credentials we're running with.
  const accountId = await getAwsAccountId();

  return `${accountId}.dkr.ecr.${AWS_REGION}.amazonaws.com`;
};

export const loginToEcr = async () => {
  const ecr = new AWS.ECR({ region: AWS_REGION });
  const authData = await ecr.getAuthorizationToken().promise();
  const token = authData.authorizationData?.[0].authorizationToken;
  if (!token) {
    throw new Error(`Could not get ECR login token`);
  }
  const [user, password] = Buffer.from(token, "base64").toString().split(":");

  const ecrRegistryUrl = await getEcrRegistryUrl();

  await execa(
    "docker",
    ["login", "--username", user, "--password-stdin", ecrRegistryUrl],
    { input: password }
  );
};

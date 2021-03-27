import fs from "fs-extra";
import path from "path";
import execa from "execa";

import { getApiRoutes, getImageNameForRoute, getImageTag } from "./api-utils";

const createBuildDirectory = async (imageName: string) => {
  const buildDirectory = path.join(".next", "lambda-images", imageName);
  await fs.ensureDir(buildDirectory);
  return buildDirectory;
};

const buildImageForRoute = async (routePath: string, routeBundle: string) => {
  // Resolve the path to the route bundle
  const routeBundlePath = path.resolve(".next", "serverless", routeBundle);

  // The image name include the hash of the API route. This gives us a
  // deterministic identifier to use between deployments.
  const { name: imageName, hash: routeHash } = getImageNameForRoute(routePath);

  // Set up a temporary subdirectory in `.next` in which we can buld our image
  const buildDirectory = await createBuildDirectory(routeHash);

  // Copy over the bundle
  await fs.copyFile(routeBundlePath, path.join(buildDirectory, "bundle.js"));

  // Create a handler wrapping the bundle
  const handler = `const compat = require('@sls-next/next-aws-lambda');
const bundle = require('./bundle');

module.exports.handler = (event, context, callback) => {
  compat(bundle)(event, context, callback);
};
`;

  // Write the handler to disk
  await fs.writeFile(path.join(buildDirectory, "app.js"), handler);

  // Create a package.json so we can install the Next/AWS compat layer
  await fs.writeJson(path.join(buildDirectory, "package.json"), {
    name: "@prairielearn/next-api-lambda",
    private: "true",
    dependencies: {
      "@sls-next/next-aws-lambda": "2.6.3",
    },
  });

  // Create a Dockerfile for the handler
  const Dockerfile = `FROM public.ecr.aws/lambda/nodejs:12

COPY bundle.js app.js package.json /var/task/

RUN npm install

CMD [ "app.handler" ]
`;

  // Write the Dockerfile to dist
  await fs.writeFile(path.join(buildDirectory, "Dockerfile"), Dockerfile);

  const imageTag = await getImageTag();

  console.log(
    `Building and tagging ${imageName}:${imageTag} for route ${routePath}`
  );

  // Build the image
  await execa("docker", ["build", ".", "-t", `${imageName}:${imageTag}`], {
    cwd: buildDirectory,
  });

  // Tag the image as `latest`
  await execa("docker", [
    "tag",
    `${imageName}:${imageTag}`,
    `${imageName}:latest`,
  ]);

  console.log(`Built and tagged ${imageName}:${imageTag}`);
};

export const buildApiImages = async () => {
  const apiRoutes = await getApiRoutes();

  console.log("API routes:");
  Object.entries(apiRoutes).forEach(([routePath, routeBundle]) => {
    console.log(`- ${routePath}: ${routeBundle}`);
  });

  // For each API route, build a new image
  await Promise.all(
    Object.entries(apiRoutes).map(([routePath, routeBundle]) =>
      buildImageForRoute(routePath, routeBundle)
    )
  );
};

if (require.main === module) {
  buildApiImages().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

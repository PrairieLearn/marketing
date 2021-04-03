import fs from "fs-extra";
import path from "path";
import execa from "execa";
import { createHash } from "crypto";

export const getApiRoutes = async () => {
  // Enumerate all available pages from the Next build directory
  const pagesManifest = (await fs.readJson(
    path.join(".next", "serverless", "pages-manifest.json")
  )) as Record<string, string>;

  // Build an object of only API routes
  const apiRoutes = Object.entries(pagesManifest)
    .filter(([route]) => route.startsWith("/api"))
    .reduce(
      (acc, [route, bundle]) => ({
        ...acc,
        [route]: bundle,
      }),
      {} as Record<string, string>
    );

  return apiRoutes;
};

export const getImageNameForRoute = (routePath: string) => {
  const routeHash = createHash("sha256")
    .update(routePath)
    .digest("hex")
    .substring(0, 12);
  return {
    name: `prairielearn/marketing-api-lambda-${routeHash}`,
    hash: routeHash,
  };
};

/**
 * Returns a tag suitable for an immutable build of a Docker image, in this
 * case the current Git revision.
 */
export const getImageTag = async () => {
  return (await execa("git", ["rev-parse", "HEAD"])).stdout;
};

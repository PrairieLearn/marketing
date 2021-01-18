import AWS from "aws-sdk";
import fs from "fs-extra";
import path from "path";
import globby from "globby";
import crypto from "crypto";
import mime from "mime";

const AWS_REGION = "us-east-2";
const CLOUDFRONT_DISTRIBUTION_ID = "E2O86FEUUQ9OA4";
const S3_BUCKET_NAME = "prairielearn-marketing-prod";

const FILES_ROOT = path.join(process.cwd(), "out");

const errorAndExit = (message: string) => {
  console.error(message);
  process.exit(1);
};

const getCacheControlHeader = (type: string) => {
  if (type === "text/html") {
    // Ensure HTML documents are always revalidated
    return "public, max-age=0, must-revalidate";
  }
  // All non-HTML assets are content-addressable and are thus considerd immutable.
  return "public, max-age=31536000, immutable";
};

const getPathsToInvalidate = async () => {
  const rootEntries = await fs.readdir(FILES_ROOT);
  // We need to invalidate paths for all root files and all root directories
  const pathsToInvalidate: string[] = [];
  await Promise.all(
    rootEntries.map(async (entry) => {
      const entryStat = await fs.stat(path.join(FILES_ROOT, entry));
      if (entryStat.isFile()) {
        const { name, ext } = path.parse(entry);
        if (ext === ".html") {
          pathsToInvalidate.push(`/${name === "index" ? "" : name}`);
        } else {
          pathsToInvalidate.push(`/${entry}`);
        }
      } else if (entryStat.isDirectory()) {
        pathsToInvalidate.push(`/${entry}/*`);
      } else {
        throw new Error(`Unknown file type: ${entryStat}`);
      }
    })
  );
  return pathsToInvalidate;
};

const listAllKeys = async (
  client: AWS.S3,
  keys: string[] = [],
  continuationToken: string | undefined = undefined
): Promise<string[]> => {
  const params: AWS.S3.Types.ListObjectsV2Request = {
    Bucket: S3_BUCKET_NAME,
    ContinuationToken: continuationToken,
  };
  const {
    Contents,
    IsTruncated,
    NextContinuationToken,
  } = await client.listObjectsV2(params).promise();
  const contentsKeys = (Contents || [])
    .map((item) => item.Key)
    .filter((key): key is string => !!key);
  const resultKeys = [...keys, ...contentsKeys];
  if (!IsTruncated) {
    return resultKeys;
  }
  return listAllKeys(client, resultKeys, NextContinuationToken);
};

/**
 * Given an S3 client and a path to a file in `FILES_ROOT`, uploads that file
 * to the S3 bucket with the given key.
 *
 * @todo: Could be improved to only re-upload if the file changed.
 *
 * @param client
 * @param filePath
 * @param key
 */
const uploadFileToS3 = async (
  client: AWS.S3,
  filePath: string,
  key: string
) => {
  const fileContents = await fs.readFile(path.join(FILES_ROOT, filePath));
  const contentType = mime.getType(filePath);
  if (!contentType) {
    throw new Error(`Could not determine content type for ${filePath}`);
  }
  const cacheControl = getCacheControlHeader(contentType);
  const params: AWS.S3.Types.PutObjectRequest = {
    Bucket: S3_BUCKET_NAME,
    Key: key,
    Body: fileContents,
    ContentMD5: crypto.createHash("md5").update(fileContents).digest("base64"),
    ContentType: contentType,
    CacheControl: cacheControl,
    // Ensure asset is publicly accessible
    ACL: "public-read",
  };
  await client.putObject(params).promise();
  console.log(
    `Uploaded ${filePath} to ${key} with Cache-Control: ${cacheControl}`
  );
};

const uploadFilesToS3 = async (client: AWS.S3) => {
  const filesToUpload = (await globby(`${FILES_ROOT}/**/*`)).map((file) =>
    path.relative(FILES_ROOT, file)
  );

  console.log("Uploading files to S3...");
  await Promise.all(
    filesToUpload.map((file) => uploadFileToS3(client, file, file))
  );
  console.log(`Uploaded ${filesToUpload.length} files to S3`);

  // S3 isn't particularly smart - if we request `/foo/bar`, it won't serve
  // `/foo/bar.html`, which is how `next export` generates things. To handle
  // that, we'll upload "bare" versions for the files, e.g. `/foo/bar`. These
  // "aliases" will we served for this case.
  const aliasesToUpload = filesToUpload
    .filter((file) => {
      const { ext, name } = path.parse(file);
      return ext === ".html" && name !== "index";
    })
    .map((file) => {
      return {
        file: file,
        alias: file.replace(/\.html$/, ""),
      };
    });

  console.log("Uploading aliases to S3...");
  await Promise.all(
    aliasesToUpload.map(({ file, alias }) =>
      uploadFileToS3(client, file, alias)
    )
  );
  console.log(`Uploaded ${aliasesToUpload.length} aliases to S3`);
  const uploadedAliases = aliasesToUpload.map(({ alias }) => alias);
  return [...filesToUpload, ...uploadedAliases];
};

const deleteRemovedFilesFromS3 = async (
  client: AWS.S3,
  uploadedFiles: string[]
) => {
  const keys = await listAllKeys(client);
  const keysToDelete = keys.filter((key) => !uploadedFiles.includes(key));

  if (keysToDelete.length === 0) {
    console.log("No extraneous files to delete");
    return;
  }

  // The `DeleteObjects` endpoint can only handle a max of 1000 keys at a time.
  // We need to batch `keysToDelete` into groups of at most 1000 keys.
  for (let i = 0; i < keysToDelete.length; i += 1000) {
    const batch = keysToDelete.slice(i, i + 1000);
    const params: AWS.S3.Types.DeleteObjectsRequest = {
      Bucket: S3_BUCKET_NAME,
      Delete: {
        Objects: batch.map((key) => ({ Key: key })),
      },
    };
    await client.deleteObjects(params).promise();
    console.log("Deleted the following extraneous files:");
    batch.forEach((key) => console.log(`- ${key}`));
  }
};

const invalidateCloudFrontDistribution = async () => {
  const cloudfront = new AWS.CloudFront();
  const pathsToInvalidate = await getPathsToInvalidate();
  const params: AWS.CloudFront.Types.CreateInvalidationRequest = {
    DistributionId: CLOUDFRONT_DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: `deploy-${Date.now() / 1000}`,
      Paths: {
        Quantity: pathsToInvalidate.length,
        Items: pathsToInvalidate,
      },
    },
  };
  console.log("Invalidating CloudFront distribution...");
  await cloudfront.createInvalidation(params).promise();
  console.log("Successfully invalidated the following paths:");
  pathsToInvalidate.forEach((p) => console.log(`- ${p}`));
};

(async () => {
  // Safety check: ensure project has been built
  if (!(await fs.pathExists(path.join("out", "index.html")))) {
    errorAndExit("Built files not found; ensure `npm run build` has been run.");
  }

  AWS.config.update({
    region: AWS_REGION,
    sslEnabled: true,
  });

  const s3 = new AWS.S3();

  const uploadedFiles = await uploadFilesToS3(s3);
  await invalidateCloudFrontDistribution();
  await deleteRemovedFilesFromS3(s3, uploadedFiles);
})().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

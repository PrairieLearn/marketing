import fs from "fs-extra";
import path from "path";
import { createHash } from "crypto";
import { imageSizeFromFile } from "image-size/fromFile";
import slugify from "slugify";

const PUBLIC_BUILD_IMAGES_DIR = path.resolve(
  process.cwd(),
  "public",
  "build",
  "images",
);

export interface ImageInfo {
  url: string;
  extension: string;
  contentHash: string;
  width: number;
  height: number;
}

export const copyImageToPublicDir = async (
  imagePath: string,
): Promise<ImageInfo> => {
  const { ext: extension, name } = path.parse(imagePath);
  const slugifiedName = slugify(name, { lower: true });

  // Compute file hash so we can make files content-addressable
  const imageContent = await fs.readFile(imagePath);
  const imageContentHash = createHash("sha1")
    .update(imageContent)
    .digest("hex");

  const imageBase = `${slugifiedName}-${imageContentHash}${extension}`;

  // Copy file to public build directory
  await fs.ensureDir(PUBLIC_BUILD_IMAGES_DIR);
  const imageDestination = path.resolve(PUBLIC_BUILD_IMAGES_DIR, imageBase);
  await fs.copyFile(imagePath, imageDestination);

  const size = await imageSizeFromFile(imagePath);
  if (!size || !size.width || !size.height) {
    throw new Error(`Could not determine size of ${imagePath}`);
  }

  return {
    url: `/build/images/${imageBase}`,
    contentHash: imageContentHash,
    extension,
    width: size.width,
    height: size.height,
  };
};

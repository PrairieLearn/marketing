import fs from "fs-extra";
import path from "path";
import { createHash } from "crypto";
import { Node } from "unist";
import { Transformer } from "unified";
import visit from "unist-util-visit";
import imageSizeCallback from "image-size";
import { promisify } from "util";

const imageSize = promisify(imageSizeCallback);

const PUBLIC_BUILD_IMAGES_DIR = path.resolve(
  process.cwd(),
  "public",
  "build",
  "images"
);

interface ImageNode extends Node {
  type: "image";
  url: string;
  title?: string;
  alt?: string;
}

export default (): Transformer => async (tree, file) => {
  const baseDirectory = path.parse(file.history[0]).dir;

  // console.dir(tree, { depth: null });

  const codeNodes: ImageNode[] = [];
  visit(tree, "image", (node: ImageNode) => {
    codeNodes.push(node);
  });

  await Promise.all(
    codeNodes.map(async (node) => {
      // Resolve path to image on disk
      const imagePath = path.resolve(baseDirectory, node.url);

      // Compute file hash so we can make files content-addressable
      const imageContents = await fs.readFile(imagePath);
      const imageContentsHash = createHash("sha1")
        .update(imageContents)
        .digest("hex");

      // Copy file to public build directory
      await fs.ensureDir(PUBLIC_BUILD_IMAGES_DIR);
      const imageDestination = path.resolve(
        PUBLIC_BUILD_IMAGES_DIR,
        `${imageContentsHash}.png`
      );
      await fs.copyFile(imagePath, imageDestination);

      // Rewrite image node to point at this new resource
      node.url = `__image__/${imageContentsHash}.png`;

      const size = await imageSize(imagePath);
      if (!size) throw new Error(`Could not determine size of ${imagePath}`);

      const dimensionProps = {
        imageWidth: size.width,
        imageHeight: size.height,
      };

      const data = node.data || (node.data = {});
      const props = data.hProperties || (data.hProperties = {});
      Object.assign(props, dimensionProps);
    })
  );
};

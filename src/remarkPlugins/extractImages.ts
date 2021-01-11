import fs from "fs-extra";
import path from "path";
import { createHash } from "crypto";
import { Node } from "unist";
import { Transformer } from "unified";
import visit from "unist-util-visit";
import imageSizeCallback from "image-size";
import { promisify } from "util";

import { copyImageToPublicDir } from "../lib/images";

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

  const codeNodes: ImageNode[] = [];
  visit(tree, "image", (node: ImageNode) => {
    codeNodes.push(node);
  });

  await Promise.all(
    codeNodes.map(async (node) => {
      // Resolve path to image on disk
      const imagePath = path.resolve(baseDirectory, node.url);

      const { url, width, height } = await copyImageToPublicDir(imagePath);

      // Rewrite image node to point at this new resource
      node.url = url;

      const dimensionProps = {
        imageWidth: width,
        imageHeight: height,
      };

      const data = node.data || (node.data = {});
      const props = data.hProperties || (data.hProperties = {});
      Object.assign(props, dimensionProps);
    })
  );
};

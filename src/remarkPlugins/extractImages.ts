import path from "path";
import { Node } from "unist";
import { Transformer } from "unified";
import { visit } from "unist-util-visit";

import { copyImageToPublicDir } from "../lib/images";

interface ImageNode extends Node {
  type: "image";
  url: string;
  title?: string;
  alt?: string;
}

export default function extractImages(): Transformer {
  return async (tree, file) => {
    const baseDirectory = path.parse(file.history[0]).dir;

    const imageNodes: ImageNode[] = [];
    visit(tree, "image", (node: ImageNode) => {
      imageNodes.push(node);
    });

    await Promise.all(
      imageNodes.map(async (node) => {
        // Resolve path to image on disk
        const imagePath = path.resolve(baseDirectory, node.url);

        const { url, width, height } = await copyImageToPublicDir(imagePath);

        // Rewrite image node to point at this new resource
        node.url = url;

        const dimensionProps = {
          imageWidth: width,
          imageHeight: height,
        };

        node.data ??= {};
        (node.data as any).hProperties ??= {};
        Object.assign((node.data as any).hProperties, dimensionProps);
      }),
    );
  };
}

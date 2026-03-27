import fs from "fs-extra";
import path from "path";
import { Node } from "unist";
import { Transformer } from "unified";
import { visit } from "unist-util-visit";

interface CodeNode extends Node {
  type: "code";
  value: string;
  lang?: string;
  meta?: string;
}

export default function loadCode(): Transformer {
  return async (tree, file) => {
    const baseDirectory = path.parse(file.history[0]).dir;

    const codeNodes: CodeNode[] = [];
    visit(tree, "code", (node: CodeNode) => {
      codeNodes.push(node);
    });

    await Promise.all(
      codeNodes.map(async (node) => {
        if (!node.meta) return;

        // `node.meta` will look something like `foo=bar baz=biz`
        // parse that into something like `[['foo', 'bar'], ['baz', 'biz']]`
        const metaEntries = node.meta
          .split(" ")
          .map((entry) => entry.split("="));
        const srcMetaEntry = metaEntries.find((entry) => entry[0] === "src");
        if (!srcMetaEntry) return;

        const srcPath = srcMetaEntry[1];
        const filePath = path.join(baseDirectory, srcPath);
        const fileContents = await fs.readFile(filePath, "utf-8");
        node.value = fileContents;
      }),
    );
  };
}

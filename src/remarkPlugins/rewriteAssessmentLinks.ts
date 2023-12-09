import path from "path";
import { Node } from "unist";
import { Transformer } from "unified";
import { visit } from "unist-util-visit";

import type { Assessment } from "../lib/catalog/assessments";

interface LinkNode extends Node {
  type: "link";
  url: string;
}

/**
 * The directory structure used by the example course on disk is different from
 * that used by the marketing site itself. To allow for Markdown links between
 * pages, we'll rewrite them to point to the correct slugified URL.
 */
export default function rewriteAssessmentLinks(assessments: Assessment[]) {
  return (): Transformer => async (tree, file) => {
    const baseDirectory = path.parse(file.history[0]).dir;

    visit(tree, "link", (node: LinkNode) => {
      if (!node.url.startsWith(".")) {
        // Not a relative URL; nothing to do here
        return;
      }

      const resolvedFile = path.resolve(baseDirectory, node.url);
      const resolvedAssessment = assessments.find(
        (a) => a.markdownPath === resolvedFile
      );
      if (!resolvedAssessment) {
        throw new Error(
          `Relative link '${node.url}' from '${baseDirectory}' could not be resolved`
        );
      }

      node.url = `./${resolvedAssessment.slug}`;
    });
  };
}

import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { VFile } from "vfile";
import remarkGfm from "remark-gfm";

import loadCodePlugin from "../remarkPlugins/loadCode";
import extractImages from "../remarkPlugins/extractImages";

export async function serializeMarkdownDocument(
  doc: string,
  filepath: string,
): Promise<MDXRemoteSerializeResult> {
  const file = new VFile({ path: filepath, value: doc });
  return serialize(file, {
    mdxOptions: {
      remarkPlugins: [loadCodePlugin, extractImages, remarkMath, remarkGfm],
      rehypePlugins: [rehypeKatex],
    },
  });
}

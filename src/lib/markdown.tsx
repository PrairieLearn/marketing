import fs from "fs-extra";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { VFile } from "vfile";

import loadCodePlugin from "../remarkPlugins/loadCode";
import extractImages from "../remarkPlugins/extractImages";
import { MarkdownPageProps } from "./markdown-page";

export async function serializeMarkdownDocument(
  doc: string,
  filepath: string
): Promise<MDXRemoteSerializeResult> {
  const file = new VFile({ path: filepath, value: doc });
  return serialize(file, {
    mdxOptions: {
      remarkPlugins: [loadCodePlugin, extractImages, remarkMath],
      rehypePlugins: [rehypeKatex],
      // Temporary fix for the following:
      // https://github.com/hashicorp/next-mdx-remote/issues/307
      development: false,
    },
  });
}

export async function getPropsForMarkdownFile(
  filePath: string
): Promise<MarkdownPageProps> {
  const rawContents = await fs.readFile(filePath, "utf8");

  const {
    content,
    data: { title = "NO TITLE", summary = null },
  } = matter(rawContents);

  const source = await serializeMarkdownDocument(content, filePath);

  return {
    source,
    title,
    summary,
  };
}

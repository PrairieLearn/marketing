import fs from "fs-extra";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import loadCodePlugin from "../remarkPlugins/loadCode";
import extractImages from "../remarkPlugins/extractImages";
import { MarkdownPageProps } from "./markdown-page";

export async function serializeMarkdownDocument(
  doc: string
): Promise<MDXRemoteSerializeResult> {
  return serialize(doc, {
    mdxOptions: {
      remarkPlugins: [loadCodePlugin, extractImages, remarkMath],
      rehypePlugins: [rehypeKatex],
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

  const source = await serializeMarkdownDocument(content);

  return {
    source,
    title,
    summary,
  };
}

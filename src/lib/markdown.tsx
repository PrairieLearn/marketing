import fs from "fs-extra";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import loadCodePlugin from "../remarkPlugins/loadCode";
import extractImages from "../remarkPlugins/extractImages";
import { MarkdownPageProps } from "./markdown-page";

export async function getPropsForMarkdownFile(
  filePath: string
): Promise<MarkdownPageProps> {
  const rawContents = await fs.readFile(filePath, "utf8");

  const {
    content,
    data: { title = "NO TITLE", summary = null },
  } = matter(rawContents);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [loadCodePlugin, extractImages, remarkMath],
      rehypePlugins: [rehypeKatex],
      filepath: filePath,
    },
  });

  return {
    source,
    title,
    summary,
  };
}

import path from "path";
import fs from "fs-extra";
import glob from "fast-glob";
import matter from "gray-matter";
import remark from "remark";

export const QUESTIONS_ROOT = path.resolve(
  process.cwd(),
  "exampleCourse",
  "questions"
);

export const getMarkdownPaths = async (): Promise<string[]> => {
  const globPath = path.join(QUESTIONS_ROOT, "gallery", "*", "gallery.md");
  return glob(globPath);
};

export const getSlugForMarkdownPath = (markdownPath: string) => {
  const pathParts = markdownPath.split(path.sep);
  return pathParts[pathParts.length - 2];
};

export const getMarkdownPathForSlug = (slug: string): string => {
  return path.join(QUESTIONS_ROOT, "gallery", slug, "gallery.md");
};

export interface MarkdownFile {
  path: string;
  content: string;
  title: string;
  slug: string;
  summary: string;
  showOnIndex: boolean;
}

export const loadMarkdownFile = async (
  markdownPath: string
): Promise<MarkdownFile> => {
  const fileContents = await fs.readFile(markdownPath);
  const {
    content,
    data: { title = "NO TITLE", summary = null, showOnIndex = true },
  } = matter(fileContents);

  return {
    path: markdownPath,
    content,
    title,
    slug: getSlugForMarkdownPath(markdownPath),
    summary,
    showOnIndex,
  };
};

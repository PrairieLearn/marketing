import path from "path";
import glob from "fast-glob";

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

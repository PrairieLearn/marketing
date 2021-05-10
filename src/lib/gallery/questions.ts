import path from "path";
import fs from "fs-extra";
import glob from "fast-glob";
import matter from "gray-matter";
import { DEMO_ROOT, MarkdownPage, SHOULD_CACHE } from "./util";
import { copyImageToPublicDir, ImageInfo } from "../images";

export const QUESTIONS_ROOT = path.resolve(DEMO_ROOT, "questions");

export interface Question extends MarkdownPage {
  image?: ImageInfo;
  showOnIndex: boolean;
}

export const getMarkdownPaths = async (): Promise<string[]> => {
  console.log(process.env);
  const globPath = path.join(QUESTIONS_ROOT, "Gallery", "*", "gallery.md");
  return glob(globPath);
};

export const getSlugForMarkdownPath = (markdownPath: string) => {
  const pathParts = markdownPath.split(path.sep);
  return pathParts[pathParts.length - 2];
};

let cachedQuestions: Question[];

export const getQuestions = async (): Promise<Question[]> => {
  if (SHOULD_CACHE && cachedQuestions) return cachedQuestions;

  const markdownPaths = await getMarkdownPaths();

  const questions: Question[] = await Promise.all(
    markdownPaths.map(async (markdownPath) => {
      const fileContents = await fs.readFile(markdownPath, "utf-8");
      const {
        content,
        data: { title = "NO TITLE", summary = null, showOnIndex = true },
      } = matter(fileContents);

      // Questions may have an associated image - if they do, copy it to the public directory
      // and attach its path to the object.
      let image: ImageInfo | undefined;
      const baseDir = path.parse(markdownPath).dir;
      const imagePath = path.join(baseDir, "galleryImage.png");
      if (await fs.pathExists(imagePath)) {
        image = await copyImageToPublicDir(imagePath);
      }

      return {
        title: title,
        slug: getSlugForMarkdownPath(markdownPath),
        summary,
        markdownContent: content,
        markdownPath,
        showOnIndex,
        image,
      };
    })
  );

  if (SHOULD_CACHE) cachedQuestions = questions;

  return questions;
};

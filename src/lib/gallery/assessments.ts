import fs from "fs-extra";
import matter from "gray-matter";
import path from "path";
import slugify from "slugify";

import { DEMO_ROOT, MarkdownPage, SHOULD_CACHE } from "./util";

export const COURSE_INSTANCE_ID = "SectionA";

export const ASSESSMENTS_ROOT = path.join(
  DEMO_ROOT,
  "courseInstances",
  COURSE_INSTANCE_ID,
  "assessments"
);

export interface Assessment extends MarkdownPage {}

let cachedAssessments: Assessment[];

export const getAssessments = async (): Promise<Assessment[]> => {
  if (SHOULD_CACHE && cachedAssessments) return cachedAssessments;

  const assessmentDirectories = (await fs.readdir(ASSESSMENTS_ROOT)).sort();

  const assessments: Assessment[] = (
    await Promise.all(
      assessmentDirectories.map(async (dir) => {
        const docsDir = path.join(ASSESSMENTS_ROOT, dir, "__docs");

        // Ensure `__docs` direcotry is present
        if (!(await fs.pathExists(docsDir))) {
          console.warn(`Assessment ${dir} is missing a __docs directory`);
          return null;
        }

        const docsMarkdownPath = path.join(docsDir, "docs.md");
        const docsMarkdown = await fs.readFile(docsMarkdownPath, "utf-8");
        const {
          content,
          data: { title = "NO TITLE", summary = "NO SUMMARY" },
        } = matter(docsMarkdown);

        return {
          title: title,
          slug: slugify(title, { lower: true }),
          summary: summary,
          markdownContent: content,
          markdownPath: docsMarkdownPath,
        };
      })
    )
  ).filter((assessment): assessment is Assessment => !!assessment);

  if (SHOULD_CACHE) cachedAssessments = assessments;

  return assessments;
};

import path from "path";

export interface MarkdownPage {
  title: string;
  slug: string;
  summary: string;
  markdownContent: string;
  markdownPath: string;
}

export const COURSE_ROOT = path.join(
  process.cwd(),
  "PrairieLearn",
  "exampleCourse"
);

/**
 * In dev mode, we want to always read from disk when loading paths and routes
 * so that we can immediately pick up changes from disk. However, during a
 * production build, we can cache certain things in memory to speed up the build.
 */
export const SHOULD_CACHE =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PHASE === "phase-production-build";

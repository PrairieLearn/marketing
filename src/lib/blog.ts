import { parseISO } from "date-fns";

const BLOG_TAGS = [
  "CBTF",
  "Case Study",
  "Development",
  "Release",
  "Technical",
] as const;

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  summary?: string;
  tags?: string[];
}

export interface BlogPostWithSlug extends BlogPost {
  slug: string;
}

const BLOG_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  // timeZone is set so server and client render the same calendar day.
  // Revisit if we ever display times along with dates.
  timeZone: "America/Chicago",
});

export function validateBlogPostTags(
  tags: string[] | undefined,
  source: string,
): string[] | undefined {
  if (!tags) {
    return undefined;
  }

  return tags.map((tag) => {
    const normalizedTag = tag.trim().toLocaleLowerCase("en-US");
    const canonicalTag = BLOG_TAGS.find(
      (blogTag) => blogTag.toLocaleLowerCase("en-US") === normalizedTag,
    );

    if (!canonicalTag) {
      throw new Error(
        `${source}: unknown blog tag "${tag}". Add it to BLOG_TAGS in src/lib/blog.ts before using it.`,
      );
    }

    if (tag !== canonicalTag) {
      throw new Error(
        `${source}: use "${canonicalTag}" instead of "${tag}" for blog tag casing.`,
      );
    }

    return canonicalTag;
  });
}

export function formatBlogDate(date: string): string {
  return BLOG_DATE_FORMATTER.format(parseISO(date));
}

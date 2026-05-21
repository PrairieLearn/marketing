import { parseISO } from "date-fns";

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  tags?: string[];
}

export interface BlogPostWithSlug extends BlogPost {
  slug: string;
}

const BLOG_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  // Pinned so server and client render the same calendar day; revisit if
  // we ever display times rather than dates.
  timeZone: "America/Chicago",
});

export function formatBlogDate(date: string): string {
  return BLOG_DATE_FORMATTER.format(parseISO(date));
}

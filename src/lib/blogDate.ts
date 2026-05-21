import { parseISO } from "date-fns";

const BLOG_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Chicago",
});

export function formatBlogDate(date: string): string {
  return BLOG_DATE_FORMATTER.format(parseISO(date));
}

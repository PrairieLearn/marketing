import fs from "fs/promises";
import path from "path";
import RSS from "rss";
import { BlogPostWithSlug } from "./blog";

const SITE_URL = "https://www.prairielearn.com";
const BLOG_URL = `${SITE_URL}/about/blog`;

export async function generateRssFeed(
  posts: BlogPostWithSlug[],
): Promise<void> {
  const feed = new RSS({
    title: "PrairieLearn Blog",
    description:
      "News, updates, teaching strategies, and deep dives from the PrairieLearn team.",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: BLOG_URL,
    language: "en-us",
  });

  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.excerpt || "",
      url: `${BLOG_URL}/${post.slug}`,
      guid: `${BLOG_URL}/${post.slug}`,
      categories: post.tags || [],
      author: post.author,
      date: new Date(post.date),
    });
  }

  const outputPath = path.join(process.cwd(), "public", "rss.xml");
  await fs.writeFile(outputPath, feed.xml({ indent: true }));
}

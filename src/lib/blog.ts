import fs from "fs";
import path from "path";

const postsDirectory = path.join(
  process.cwd(),
  "src",
  "pages",
  "about",
  "blog",
);

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  tags?: string[];
}

export async function getAllPosts(): Promise<(BlogPost & { slug: string })[]> {
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const slugs = items
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
  const posts = (await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = await import(`../pages/about/blog/${slug}/index.mdx`);
      return { slug, ...meta };
    }),
  )) as (BlogPost & { slug: string })[];

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

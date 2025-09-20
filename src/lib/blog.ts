import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  tags?: string[];
}

export function getAllPostSlugs(): string[] {
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory())
    .map(item => item.name);
}

export async function getPostBySlug(slug: string) {
    const { metadata } = await import(`../../content/${slug}/index.mdx`);
    return { metadata };
}

export async function getAllPosts(): Promise<(BlogPost & { slug: string })[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`../../content/${slug}/index.mdx`);
      return { slug, ...metadata };
    })
  ) as (BlogPost & { slug: string })[];
  
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

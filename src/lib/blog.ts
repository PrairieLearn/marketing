import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/pages/about/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  tags?: string[];
  content: string;
}

export function getAllPostSlugs(): string[] {
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory())
    .map(item => item.name);
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, slug, 'index.mdx');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

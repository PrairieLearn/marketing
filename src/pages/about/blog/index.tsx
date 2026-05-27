import fs from "fs";
import path from "path";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { parseISO } from "date-fns";
import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import Stack from "../../../components/Stack";
import { TagList } from "../../../components/Tag";
import { BlogPost, BlogPostWithSlug, formatBlogDate } from "../../../lib/blog";
import { generateRssFeed } from "../../../lib/rss";

import styles from "./index.module.scss";

interface BlogIndexProps {
  posts: BlogPostWithSlug[];
}

const BlogPostCard = ({ post }: { post: BlogPostWithSlug }) => {
  const formattedDate = formatBlogDate(post.date);

  return (
    <article className={styles.blogPostCard}>
      <div className={styles.postMeta}>
        <time className={styles.postDate}>{formattedDate}</time>
        <span className={styles.postAuthor}>{post.author}</span>
      </div>
      <h2 className={styles.postTitle}>
        <Link href={`/about/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      {post.tags && post.tags.length > 0 && <TagList tags={post.tags} />}
      {post.excerpt && <p className={styles.postExcerpt}>{post.excerpt}</p>}
    </article>
  );
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Blog | About | PrairieLearn</title>
        <meta
          name="description"
          content="News, updates, teaching strategies, and deep dives from the PrairieLearn team."
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="PrairieLearn Blog RSS Feed"
          href="/blog/rss.xml"
        />
      </Head>

      <PageBanner
        title="Blog"
        subtitle="News, updates, teaching strategies, and deep dives from the PrairieLearn team"
      />

      <div className="container-fluid py-4">
        <div className="container-md">
          <Stack spacing={4}>
            <div className="row">
              <div className="col">
                <Heading>Latest Posts</Heading>
                {posts.length === 0 ? (
                  <p>No blog posts yet. Check back soon!</p>
                ) : (
                  <div className={styles.postsList}>
                    {posts.map((post) => (
                      <BlogPostCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

async function getAllPosts(): Promise<BlogPostWithSlug[]> {
  const postsDirectory = path.join(
    process.cwd(),
    "src",
    "pages",
    "about",
    "blog",
  );

  const items = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const slugs = items
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = (await import(`./${slug}/index.mdx`)) as {
        meta: BlogPost;
      };
      return { slug, ...meta };
    }),
  );

  return posts.toSorted(
    (a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime(),
  );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = await getAllPosts();

  await generateRssFeed(posts);

  return {
    props: {
      posts,
    },
  };
};

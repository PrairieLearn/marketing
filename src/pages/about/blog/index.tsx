import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import Stack from "../../../components/Stack";
import { TagList } from "../../../components/Tag";
import { format } from "date-fns";
import { getAllPosts, BlogPost } from "../../../lib/blog";

import styles from "./index.module.scss";

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");
  
  return (
    <article className={styles.blogPostCard}>
      <div className={styles.postMeta}>
        <time className={styles.postDate}>{formattedDate}</time>
        <span className={styles.postAuthor}>by {post.author}</span>
      </div>
      <h2 className={styles.postTitle}>
        <Link href={`/about/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      {post.tags && post.tags.length > 0 && (
        <TagList tags={post.tags} />
      )}
      {post.excerpt && (
        <p className={styles.postExcerpt}>{post.excerpt}</p>
      )}
    </article>
  );
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Blog | About | PrairieLearn</title>
        <meta name="description" content="Latest news, updates, and insights from the PrairieLearn team." />
      </Head>

      <PageBanner
        title="Blog"
        subtitle="Latest news, updates, and insights from the PrairieLearn team"
      />

      <div className="container-fluid py-4">
        <div className="container-md">
          <Stack spacing={4}>
            <div className="row">
              <div className="col-md-8">
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
              <div className="col-md-4">
                <div className={styles.sidebar}>
                  <h3>About Our Blog</h3>
                  <p>
                    Stay up to date with the latest developments in online assessment, 
                    educational technology, and the PrairieLearn platform.
                  </p>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();
  
  return {
    props: {
      posts,
    },
  };
};

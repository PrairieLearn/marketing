import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import Stack from "../../../components/Stack";
import { TagList } from "../../../components/Tag";
import { format } from "date-fns";
import mdxComponents from "../../../lib/mdxComponents";
import { getAllPostSlugs, getPostBySlug, BlogPost } from "../../../lib/blog";

import styles from "./[slug].module.scss";

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");
  
  return (
    <React.Fragment>
      <Head>
        <title>{post.title} | Blog | PrairieLearn</title>
        <meta name="description" content={`${post.title} - A blog post by ${post.author}`} />
      </Head>

      <PageBanner
        title={post.title}
        subtitle={`${formattedDate} • by ${post.author}`}
      />

      <div className="container-fluid py-4">
        <div className="container-md">
          <Stack spacing={4}>
            <div className="row">
              <div className="col-md-8">
                {post.tags && post.tags.length > 0 && (
                  <TagList tags={post.tags} />
                )}
                <div className={styles.blogContent}>
                  <MDXRemote source={post.content} components={mdxComponents} />
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.sidebar}>
                  <div className={styles.postMeta}>
                    <h3>Post Details</h3>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Date:</strong> {formattedDate}</p>
                  </div>
                  
                  <div className={styles.navigation}>
                    <Link href="/about/blog" className="btn btn-outline-primary">
                      ← Back to Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { MDXProvider } from "@mdx-js/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import mdxComponents from "../../lib/mdxComponents";
import loadCodePlugin from "../../remarkPlugins/loadCode";
import extractImages from "../../remarkPlugins/extractImages";
import {
  getMarkdownPathForSlug,
  getMarkdownPaths,
  getSlugForMarkdownPath,
  loadMarkdownFile,
} from "../../lib/data";

interface GalleryPageProps {
  slug: string;
  source: string;
  summary: string;
  title: string;
}

const GalleryPage: React.FC<GalleryPageProps> = ({
  summary,
  source,
  title,
}) => {
  const content = hydrate(source);
  return (
    <div className="container">
      <div className="my-5">
        <h1 className="display-3">{title}</h1>
        {summary && <p className="lead">{summary}</p>}
      </div>
      <MDXProvider components={mdxComponents}>{content}</MDXProvider>
    </div>
  );
};

export default GalleryPage;

interface PathParams {
  slug: string;
  [key: string]: any;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const markdownPaths = await getMarkdownPaths();
  const paths = markdownPaths.map((markdownPath) => {
    const slug = getSlugForMarkdownPath(markdownPath);
    return {
      params: {
        slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  GalleryPageProps,
  PathParams
> = async ({ params }) => {
  if (!params) throw new Error("missing params");
  const { slug } = params;
  const markdownPath = getMarkdownPathForSlug(slug);
  const { content, title, summary } = await loadMarkdownFile(markdownPath);
  const mdxSource = await renderToString(content, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [loadCodePlugin, extractImages, remarkMath],
      rehypePlugins: [rehypeKatex],
      filepath: markdownPath,
    },
  });
  return {
    props: {
      source: mdxSource,
      slug,
      summary,
      title,
    },
  };
};

import React from "react";
import fs from "fs-extra";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import loadCodePlugin from "../../mdxPlugins/loadCode";
import {
  getMarkdownPathForSlug,
  getMarkdownPaths,
  getSlugForMarkdownPath,
  QUESTIONS_ROOT,
} from "../../data";

interface GalleryPageProps {
  slug: string;
  source: string;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ slug, source }) => {
  const content = hydrate(source);
  return (
    <div>
      <h1>{slug}</h1>
      <p>{content}</p>
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
  const source = await fs.readFile(markdownPath, "utf-8");
  const mdxSource = await renderToString(source, {
    mdxOptions: {
      remarkPlugins: [loadCodePlugin],
      filepath: markdownPath,
    },
  });
  return {
    props: {
      source: mdxSource,
      slug,
    },
  };
};

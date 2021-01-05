import React from "react";
import fs from "fs-extra";
import glob from "fast-glob";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import loadCodePlugin from "../../mdxPlugins/loadCode";

const QUESTIONS_ROOT = path.resolve(
  process.cwd(),
  "exampleCourse",
  "questions"
);

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
  const globPath = path.join(QUESTIONS_ROOT, "gallery", "*", "gallery.md");
  const galleryQuestions = await glob(globPath);
  const paths = galleryQuestions.map((markdownPath) => {
    const pathParts = markdownPath.split(path.sep);
    const slug = pathParts[pathParts.length - 2];
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
  const markdownPath = path.join(QUESTIONS_ROOT, "gallery", slug, "gallery.md");
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

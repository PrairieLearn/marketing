import React from "react";
import fs from "fs-extra";
import glob from "fast-glob";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

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
  return (
    <div>
      <h1>{slug}</h1>
      <p>{source}</p>
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
        sourcePath: markdownPath,
        slug,
      },
    };
  });
  console.log("gallery questions...");
  console.log(galleryQuestions);
  console.log("paths...");
  console.log(paths);
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
  const markdownDocument = await fs.readFile(markdownPath, "utf-8");
  return {
    props: {
      source: markdownDocument,
      slug,
    },
  };
};

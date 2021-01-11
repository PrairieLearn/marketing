import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import path from "path";
import fs from "fs-extra";

import Image from "../../components/Image";
import { getMarkdownPaths, loadMarkdownFile } from "../../lib/data";
import { copyImageToPublicDir, ImageInfo } from "../../lib/images";

import styles from "./index.module.scss";

interface GalleryIndexProps {
  items: {
    title: string;
    slug: string;
    summary: string;
    imageUrl?: string;
  }[];
}

const GalleryIndex: React.FC<GalleryIndexProps> = ({ items }) => {
  return (
    <div className="container">
      <div className="my-5">
        <h1 className="display-3">Gallery</h1>
        <p className="lead">
          Explore all the functionality PrairieLearn has to offer.
        </p>
      </div>
      <div className="alert alert-primary">
        New to PrairieLearn? Check out our{" "}
        <Link href="/gallery/intro">
          <a>introduction to PrairieLearn questions</a>
        </Link>{" "}
        to learn the key concepts used throughout these examples and all
        PrairieLearn questions.
      </div>
      <div className={classnames(styles.grid)}>
        {items.map((item) => {
          const galleryHref = `/gallery/${item.slug}`;
          return (
            <div className="card" key={item.slug}>
              {item.imageUrl && (
                <Link href={galleryHref}>
                  {/* Fit all images within 4:3 aspect ratio box*/}
                  <a style={{ paddingBottom: "75%", position: "relative" }}>
                    <Image
                      src={item.imageUrl}
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              )}
              <div className="card-body">
                <Link href={galleryHref}>
                  <a>
                    <h3 className="card-title h5">{item.title}</h3>
                  </a>
                </Link>
                <p className="text-muted mb-0">{item.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryIndex;

export const getStaticProps: GetStaticProps<GalleryIndexProps> = async () => {
  const markdownPaths = await getMarkdownPaths();
  const markdownFiles = (
    await Promise.all(
      markdownPaths.map((markdownPath) => loadMarkdownFile(markdownPath))
    )
  ).filter((markdownFile) => markdownFile.showOnIndex);

  // Each Markdown file *may* have an adjacent `galleryImage.png` file. If it
  // does, copy it to the public dir and attach its URL to the index entry.
  const images: { [slug: string]: ImageInfo } = {};
  await Promise.all(
    markdownFiles.map(async (markdownFile) => {
      const baseDir = path.parse(markdownFile.path).dir;
      const imagePath = path.join(baseDir, "galleryImage.png");
      if (await fs.pathExists(imagePath)) {
        images[markdownFile.slug] = await copyImageToPublicDir(imagePath);
      }
    })
  );

  // Sort the files by slug
  const sortedMarkdownFiles = markdownFiles.sort((a, b) =>
    a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
  );

  return {
    props: {
      items: sortedMarkdownFiles.map((markdownFile) => {
        const image = images[markdownFile.slug];
        return {
          title: markdownFile.title,
          slug: markdownFile.slug,
          summary: markdownFile.summary,
          imageUrl: image?.url ?? null,
        };
      }),
    },
  };
};

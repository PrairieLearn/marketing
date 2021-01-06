import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getMarkdownPaths, loadMarkdownFile } from "../../data";

import styles from "./index.module.scss";

interface GalleryIndexProps {
  items: {
    title: string;
    slug: string;
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
      <div className={classnames(styles.grid)}>
        {items.map((item) => (
          <div className="card" key={item.slug}>
            <div className="card-body">
              <Link href={`/gallery/${item.slug}`}>
                <a>
                  <h3 className="card-title h5">{item.title}</h3>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryIndex;

export const getStaticProps: GetStaticProps<GalleryIndexProps> = async () => {
  const markdownPaths = await getMarkdownPaths();
  const markdownFiles = await Promise.all(
    markdownPaths.map((markdownPath) => loadMarkdownFile(markdownPath))
  );
  return {
    props: {
      items: markdownFiles.map((markdownFile) => {
        return {
          title: markdownFile.title,
          slug: markdownFile.slug,
        };
      }),
    },
  };
};

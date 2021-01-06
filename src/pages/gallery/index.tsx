import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getMarkdownPaths, getSlugForMarkdownPath } from "../../data";

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
      <h1>Gallery</h1>
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
  return {
    props: {
      items: markdownPaths.map((markdownPath) => {
        const slug = getSlugForMarkdownPath(markdownPath);
        return {
          title: slug,
          slug: slug,
        };
      }),
    },
  };
};

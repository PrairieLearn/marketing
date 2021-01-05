import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getMarkdownPaths, getSlugForMarkdownPath } from "../../data";

interface GalleryIndexProps {
  items: {
    title: string;
    slug: string;
  }[];
}

const GalleryIndex: React.FC<GalleryIndexProps> = ({ items }) => {
  return (
    <React.Fragment>
      <h1>Gallery</h1>
      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={`/gallery/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
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

import React from "react";
import { MarkdownLayout } from "./MarkdownLayout";

export const BlogMarkdownLayout = MarkdownLayout;

import Image from "next/image";
import classNames from "classnames";

export const BlogImage = ({
  src,
  alt = "Blog Image",
  full = false,
}: {
  src: string;
  alt?: string;
  full?: boolean;
}) => {
  return (
    <div className="d-flex justify-content-center">
      <Image
        src={src}
        alt={alt}
        className={classNames("img-fluid", !full && "w-50")}
      />
    </div>
  );
};

export const BlogQuote = ({
  children,
  author,
  source,
}: {
  children: React.ReactNode;
  author?: string;
  source?: string;
}) => {
  return (
    <blockquote className="blockquote border-start border-primary border-4 ps-4 py-3 my-4 bg-light rounded-end">
      <div className="fs-5 fst-italic text-dark">{children}</div>
      {(author || source) && (
        <footer className="blockquote-footer mt-2">
          {author && <cite className="fw-bold">{author}</cite>}
          {author && source && <span className="text-muted"> in </span>}
          {source && <span className="text-muted">{source}</span>}
        </footer>
      )}
    </blockquote>
  );
};

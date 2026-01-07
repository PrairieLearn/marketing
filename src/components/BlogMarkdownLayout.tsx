import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Modal from "react-bootstrap/Modal";

import mdxComponents from "../lib/mdxComponents";
import { PageBanner } from "./Banner";

interface BlogMarkdownLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    date?: string;
    author?: string;
    tags?: string[];
    introImage?: ImageProps["src"];
    introImageAlt?: string;
    summary?: string;
    backText?: string;
    backHref?: string;
  };
}

export const BlogMarkdownLayout: React.FC<BlogMarkdownLayoutProps> = ({
  children,
  meta,
}) => {
  const { title, summary, introImage, introImageAlt, backText, backHref } =
    meta;
  if (!title) throw new Error("Missing title");

  return (
    <React.Fragment>
      <Head>
        <title>{`${title} | PrairieLearn`}</title>
      </Head>

      <PageBanner
        title={title}
        subtitle={summary}
        backText={backText}
        backHref={backHref}
      />

      <div className="container my-5">
        {introImage && (
          <div className="mb-5">
            <Image
              src={introImage}
              alt={introImageAlt || title}
              className="img-fluid w-100"
              style={{
                maxHeight: "500px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        )}
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </div>
    </React.Fragment>
  );
};

export const BlogImage = ({
  src,
  alt = "Blog Image",
  full = false,
  caption,
}: {
  src: string;
  alt?: string;
  full?: boolean;
  caption?: string | React.ReactNode;
}) => {
  const [showFullscreen, setShowFullscreen] = useState(false);

  return (
    <>
      <figure className="w-100">
        <div className="d-flex justify-content-center">
          <Image
            src={src}
            alt={alt}
            className={classNames(
              "img-fluid",
              !full && "col-lg-6 col-md-8 col-12",
            )}
            onClick={() => setShowFullscreen(true)}
            style={{ cursor: "zoom-in" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShowFullscreen(true);
              }
            }}
          />
        </div>
        {caption && (
          <figcaption className="text-muted small mt-2 text-center">
            {typeof caption === "string" ? (
              <ReactMarkdown>{caption}</ReactMarkdown>
            ) : (
              caption
            )}
          </figcaption>
        )}
      </figure>

      <Modal
        show={showFullscreen}
        onHide={() => setShowFullscreen(false)}
        fullscreen
        contentClassName="bg-transparent border-0"
        backdrop={false}
      >
        <Modal.Body
          className="p-0"
          onClick={() => setShowFullscreen(false)}
          style={{
            cursor: "zoom-out",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            style={{ objectFit: "contain", padding: "2.5vh 2.5vw" }}
          />
        </Modal.Body>
      </Modal>
    </>
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

export const BlogCalloutBox = ({
  children,
  title,
  variant = "info",
}: {
  children: React.ReactNode;
  title?: string;
  variant?: "info" | "warning" | "tip" | "note";
}) => {
  const variantStyles = {
    info: {
      border: "border-primary",
      bg: "bg-light",
      text: "text-primary",
    },
    warning: {
      border: "border-warning",
      bg: "bg-warning bg-opacity-10",
      text: "text-warning",
    },
    tip: {
      border: "border-success",
      bg: "bg-success bg-opacity-10",
      text: "text-success",
    },
    note: {
      border: "border-secondary",
      bg: "bg-secondary bg-opacity-10",
      text: "text-secondary",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={classNames(
        "border border-2 rounded px-4 pt-4 pb-2 my-4",
        styles.border,
        styles.bg,
      )}
    >
      {title && (
        <div className={classNames("fw-bold", styles.text)}>{title}</div>
      )}
      <div className="text-dark">{children}</div>
    </div>
  );
};

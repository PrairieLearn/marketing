import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Components } from "@mdx-js/react";
import { Language } from "prism-react-renderer";

import { CodeBlock } from "../components/CodeBlock";
import { Heading } from "../components/Heading";

const mdxComponents: Components = {
  a: ({ href, ...props }) => {
    const isInternalLink =
      href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
      return <Link href={href} {...props} />;
    }

    return <a href={href} {...props} />;
  },
  blockquote: ({ children }) => (
    <blockquote className="blockquote border-start border-primary border-4 ps-4 py-3 my-4 bg-light rounded-end">
      <div className="fs-5 fst-italic text-dark">{children}</div>
    </blockquote>
  ),
  h2: ({ children, ...rest }) => <Heading {...rest}>{children}</Heading>,
  img: ({ alt, src, imageWidth, imageHeight, ...rest }) => {
    let imageSrc = src;
    if (imageSrc.startsWith("__image__")) {
      imageSrc = imageSrc.replace("__image__", "/build/images");
    }
    return (
      <Image
        alt={alt}
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        className="d-block mx-auto"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    );
  },
  pre: ({ children, ...props }) => {
    if (
      !React.isValidElement<React.ComponentProps<"code">>(children) ||
      children.type !== "code" ||
      typeof children.props.children !== "string"
    ) {
      return <pre {...props}>{children}</pre>;
    }

    const language = children.props.className?.match(/\blanguage-(\S+)/)?.[1];
    return (
      <div className="mb-3">
        <CodeBlock
          code={children.props.children.replace(/\n$/, "")}
          language={(language ?? "text") as Language}
        />
      </div>
    );
  },
  table: ({ children }) => (
    <div className="table-responsive">
      <table className="table">{children}</table>
    </div>
  ),
};

export default mdxComponents;

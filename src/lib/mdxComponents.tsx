import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Components } from "@mdx-js/react";
import { Language } from "prism-react-renderer";

import { CodeBlock } from "../components/CodeBlock";

// const CustomLink

const mdxComponents: Components = {
  a: ({ href, ...props }) => {
    const isInternalLink =
      href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
      return <Link href={href} {...props} />;
    }

    return <a href={href} {...props} />;
  },
  code: ({ children, className }) => {
    if (!className) {
      // Handle inline code.
      return <code>{children}</code>;
    }

    // Handle code blocks.
    const language = className.replace(/language-/, "") as Language;
    return (
      <div className="mb-3">
        <CodeBlock code={children.trim()} language={language} />
      </div>
    );
  },
  pre: ({ children }) => children,
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
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    );
  },
  table: ({ children }) => (
    <div className="table-responsive">
      <table className="table">{children}</table>
    </div>
  ),
};

export default mdxComponents;

import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import React from "react";

import mdxComponents from "../lib/mdxComponents";
import { PageBanner } from "./Banner";

interface MarkdownLayoutProps {
  children: React.ReactNode;
  meta: {
    backText?: string;
    backHref?: string;
    title: string;
    titleClass: string;
    summary?: string;
  };
}

export const MarkdownLayout: React.FC<MarkdownLayoutProps> = ({
  children,
  meta,
}) => {
  const { title, titleClass, summary } = meta;
  if (!title) throw new Error("Missing title");

  return (
    <React.Fragment>
      <Head>
        <title>{`${title} | PrairieLearn`}</title>
      </Head>

      <PageBanner
        title={title}
        titleClass={titleClass}
        subtitle={summary}
        backText={meta.backText}
        backHref={meta.backHref}
      />

      <div className="container my-5">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </div>
    </React.Fragment>
  );
};

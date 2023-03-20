import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import React from "react";

import mdxComponents from "../lib/mdxComponents";
import { PageBanner } from "./Banner";

interface MarkdownLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    summary?: string;
  };
}

export const MarkdownLayout: React.FC<MarkdownLayoutProps> = ({
  children,
  meta,
}) => {
  const { title, summary } = meta;
  if (!title) throw new Error("Missing title");

  return (
    <React.Fragment>
      <Head>
        <title>{`${title} | PrairieLearn`}</title>
      </Head>

      <PageBanner title={title} />

      <div className="container my-5">
        <div className="my-5">
          {summary && <p className="lead">{summary}</p>}
        </div>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </div>
    </React.Fragment>
  );
};

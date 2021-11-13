import React from "react";

import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import mdxComponents from "../lib/mdxComponents";

export interface MarkdownPageProps {
  source: MDXRemoteSerializeResult;
  title: string;
  summary?: string;
}

export const MarkdownPage: React.FC<MarkdownPageProps> = ({
  source,
  title,
  summary,
}) => (
  <React.Fragment>
    <Head>
      <title>{title} | PrairieLearn</title>
    </Head>
    <div className="container">
      <div className="my-5">
        <h1 className="display-3">{title}</h1>
        {summary && <p className="lead">{summary}</p>}
      </div>
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  </React.Fragment>
);

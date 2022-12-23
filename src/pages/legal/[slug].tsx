import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

import { PageBanner } from "../../components/Banner";
import mdxComponents from "../../lib/mdxComponents";

interface TermsProps {
  title: string;
  source: MDXRemoteSerializeResult;
}

const Terms: React.FC<TermsProps> = ({ title, source }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title} | PrairieLearn</title>
      </Head>

      <PageBanner title={title} />

      <div className="container my-5">
        <MDXRemote {...source} components={mdxComponents} />
      </div>
    </React.Fragment>
  );
};

export default Terms;

interface PathParams {
  slug: string;
  [key: string]: any;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: ["terms", "privacy", "subprocessors"].map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TermsProps, PathParams> = async ({
  params,
}) => {
  if (!params) throw new Error("Missing params");

  const source = await fs.readFile(
    path.resolve("legal", `${params.slug}.md`),
    "utf-8"
  );
  const {
    content,
    data: { title },
  } = matter(source);
  return {
    props: {
      title,
      source: await serialize(content),
    },
  };
};

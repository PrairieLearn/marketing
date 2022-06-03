import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs-extra";

import { PageBanner } from "../../components/Banner";
import path from "path";

interface TermsProps {
  source: MDXRemoteSerializeResult;
}

const Terms: React.FC<TermsProps> = ({ source }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Terms of Service | PrairieLearn</title>
      </Head>

      <PageBanner title="Terms of Service" />

      <div className="container my-5">
        <MDXRemote {...source} />
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
    paths: ["terms", "privacy"].map((slug) => ({ params: { slug } })),
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
  return {
    props: {
      source: await serialize(source),
    },
  };
};

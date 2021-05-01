import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { getAssessments } from "../../lib/demo/data";
import mdxComponents from "../../lib/mdxComponents";
import extractImages from "../../remarkPlugins/extractImages";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { MDXProvider } from "@mdx-js/react";

interface DemoPageProps {
  title: string;
  summary: string;
  source: string;
}

const DemoPage: React.FC<DemoPageProps> = ({ title, summary, source }) => {
  const content = hydrate(source);
  return (
    <React.Fragment>
      <Head>
        <title>Demo: {title} | PrairieLearn</title>
      </Head>
      <div className="container">
        <div className="my-5">
          <h1 className="display-3">{title}</h1>
        </div>
        <MDXProvider components={mdxComponents}>{content}</MDXProvider>
      </div>
    </React.Fragment>
  );
};

export default DemoPage;

interface PathParams {
  slug: string[];
  [key: string]: any;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const assessments = await getAssessments();

  const paths = assessments.map(({ slug }) => ({
    params: { slug: ["assessment", slug] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  DemoPageProps,
  PathParams
> = async ({ params }) => {
  if (!params) throw new Error("Missing params");

  const { slug } = params;

  if (slug[0] !== "assessment") {
    throw new Error(`Unknown slug component: ${slug[0]}`);
  }

  const assessmentSlug = slug[1];

  const assessments = await getAssessments();
  const assessment = assessments.find((a) => a.slug === assessmentSlug);
  if (!assessment) {
    throw new Error(`Assessment not found for slug ${assessmentSlug}`);
  }

  const mdxSource = await renderToString(assessment.markdownContent, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [extractImages, remarkMath],
      rehypePlugins: [rehypeKatex],
      filepath: assessment.markdownPath,
    },
  });

  return {
    props: {
      title: assessment.title,
      summary: assessment.summary,
      source: mdxSource,
    },
  };
};

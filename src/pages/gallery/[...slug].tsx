import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { MDXProvider } from "@mdx-js/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import mdxComponents from "../../lib/mdxComponents";
import loadCodePlugin from "../../remarkPlugins/loadCode";
import extractImages from "../../remarkPlugins/extractImages";
import { getAssessments } from "../../lib/gallery/assessments";
import { getQuestions } from "../../lib/gallery/questions";
import rewriteAssessmentLinks from "../../remarkPlugins/rewriteAssessmentLinks";

interface GalleryPageProps {
  source: string;
  summary: string;
  title: string;
  prairielearnUrl?: string | null;
}

const GalleryPage: React.FC<GalleryPageProps> = ({
  summary,
  source,
  title,
  prairielearnUrl,
}) => {
  const content = hydrate(source);
  return (
    <React.Fragment>
      <Head>
        <title>{title} | PrairieLearn</title>
      </Head>
      <div className="container">
        <div className="my-5">
          <h1 className="display-3">{title}</h1>
          {summary && <p className="lead">{summary}</p>}
          {prairielearnUrl && (
            <a href={prairielearnUrl} className="btn btn-primary mt-2">
              View on PrairieLearn
            </a>
          )}
        </div>
        <MDXProvider components={mdxComponents}>{content}</MDXProvider>
      </div>
    </React.Fragment>
  );
};

export default GalleryPage;

interface PathParams {
  slug: string[];
  [key: string]: any;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const assessments = await getAssessments();
  const assessmentPaths = assessments.map(({ slug }) => ({
    params: {
      slug: ["assessment", slug],
    },
  }));

  const questions = await getQuestions();
  const questionPaths = questions.map(({ slug }) => ({
    params: {
      slug: ["question", slug],
    },
  }));

  return {
    paths: [...assessmentPaths, ...questionPaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  GalleryPageProps,
  PathParams
> = async ({ params }) => {
  if (!params) throw new Error("missing params");
  const { slug: slugComponents } = params;

  const [type, slug] = slugComponents;

  switch (type) {
    case "assessment": {
      const assessments = await getAssessments();
      const assessment = assessments.find((a) => a.slug === slug);
      if (!assessment) {
        throw new Error(`Assessment not found for slug ${slug}`);
      }

      const mdxSource = await renderToString(assessment.markdownContent, {
        components: mdxComponents,
        mdxOptions: {
          remarkPlugins: [
            rewriteAssessmentLinks(assessments),
            extractImages,
            remarkMath,
          ],
          rehypePlugins: [rehypeKatex],
          filepath: assessment.markdownPath,
        },
      });

      return {
        props: {
          source: mdxSource,
          summary: assessment.summary,
          title: assessment.title,
          prairielearnUrl: assessment.prairielearnUrl,
        },
      };
    }
    case "question": {
      const questions = await getQuestions();
      const question = questions.find((a) => a.slug === slug);
      if (!question) {
        throw new Error(`Question not found for slug: ${slug}`);
      }

      const mdxSource = await renderToString(question.markdownContent, {
        components: mdxComponents,
        mdxOptions: {
          remarkPlugins: [loadCodePlugin, extractImages, remarkMath],
          rehypePlugins: [rehypeKatex],
          filepath: question.markdownPath,
        },
      });
      return {
        props: {
          source: mdxSource,
          summary: question.summary,
          title: question.title,
        },
      };
    }
    default:
      throw new Error(`Invalid slug type: ${type}`);
  }
};

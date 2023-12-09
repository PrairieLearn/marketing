import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { VFile } from "vfile";
import remarkGfm from "remark-gfm";

import mdxComponents from "../../lib/mdxComponents";
import loadCodePlugin from "../../remarkPlugins/loadCode";
import extractImages from "../../remarkPlugins/extractImages";
import { getAssessments } from "../../lib/catalog/assessments";
import { getQuestions } from "../../lib/catalog/questions";
import rewriteAssessmentLinks from "../../remarkPlugins/rewriteAssessmentLinks";
import { PageBanner } from "../../components/Banner";

interface GalleryPageProps {
  source: MDXRemoteSerializeResult;
  summary: string;
  title: string;
  type: "question" | "assessment";
  prairielearnUrl?: string | null;
}

const GalleryPage: React.FC<GalleryPageProps> = ({
  summary,
  source,
  title,
  type,
  prairielearnUrl,
}) => {
  const backText =
    type === "question"
      ? "Back to question catalog"
      : "Back to assessment catalog";
  const backHref =
    type === "question" ? "/catalog/questions" : "/catalog/assessments";
  return (
    <React.Fragment>
      <Head>
        <title>{`${title} | PrairieLearn`}</title>
      </Head>
      <PageBanner
        title={title}
        subtitle={summary}
        backHref={backHref}
        backText={backText}
      >
        {prairielearnUrl && (
          <a href={prairielearnUrl} className="btn btn-light mt-2">
            View on PrairieLearn
          </a>
        )}
      </PageBanner>
      <div className="container my-5">
        <MDXRemote {...source} components={mdxComponents} />
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
      slug: ["assessments", slug],
    },
  }));

  const questions = await getQuestions();
  const questionPaths = questions.map(({ slug }) => ({
    params: {
      slug: ["questions", slug],
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
    case "assessments": {
      const assessments = await getAssessments();
      const assessment = assessments.find((a) => a.slug === slug);
      if (!assessment) {
        throw new Error(`Assessment not found for slug ${slug}`);
      }

      const file = new VFile({
        path: assessment.markdownPath,
        value: assessment.markdownContent,
      });
      const mdxSource = await serialize(file, {
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            rewriteAssessmentLinks(assessments),
            extractImages,
            remarkMath,
          ],
          rehypePlugins: [rehypeKatex],
        },
      });

      return {
        props: {
          source: mdxSource,
          summary: assessment.summary,
          title: assessment.title,
          prairielearnUrl: assessment.prairielearnUrl,
          type: "assessment",
        },
      };
    }
    case "questions": {
      const questions = await getQuestions();
      const question = questions.find((a) => a.slug === slug);
      if (!question) {
        throw new Error(`Question not found for slug: ${slug}`);
      }

      const file = new VFile({
        path: question.markdownPath,
        value: question.markdownContent,
      });
      const mdxSource = await serialize(file, {
        mdxOptions: {
          remarkPlugins: [remarkGfm, loadCodePlugin, extractImages, remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      });
      return {
        props: {
          source: mdxSource,
          summary: question.summary,
          title: question.title,
          type: "question",
        },
      };
    }
    default:
      throw new Error(`Invalid slug type: ${type}`);
  }
};

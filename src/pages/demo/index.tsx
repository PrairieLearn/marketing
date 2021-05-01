import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import fs from "fs-extra";
import { getAssessments } from "../../lib/demo/data";
import Link from "next/link";
import Stack from "../../components/Stack";

interface Assessment {
  title: string;
  slug: string;
  summary: string;
}

interface DemoIndexProps {
  assessments: Assessment[];
}

const DemoIndex: React.FC<DemoIndexProps> = ({ assessments }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Demo | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Demo</h1>
        </div>
        <Stack spacing={3}>
          {assessments.map((assessment) => {
            const assessmentHref = `/demo/assessment/${assessment.slug}`;
            return (
              <article key={assessment.slug}>
                <h2 className="h4">
                  <Link href={assessmentHref}>
                    <a>{assessment.title}</a>
                  </Link>
                </h2>
                <p className="mb-0">{assessment.summary}</p>
              </article>
            );
          })}
        </Stack>
      </div>
    </React.Fragment>
  );
};

export default DemoIndex;

export const getStaticProps: GetStaticProps<DemoIndexProps> = async () => {
  const assessments = await getAssessments();

  return {
    props: {
      assessments,
    },
  };
};

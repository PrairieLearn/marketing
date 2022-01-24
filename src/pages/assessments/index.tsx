import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import { PageBanner } from "../../components/Banner";
import { DemoCourseAction } from "../../components/DemoCourse";
import Stack from "../../components/Stack";

import { getAssessments } from "../../lib/gallery/assessments";

interface Assessment {
  title: string;
  slug: string;
  summary: string;
}

interface AssessmentIndexProps {
  assessments: Assessment[];
}

const AssessmentIndex: React.FC<AssessmentIndexProps> = ({ assessments }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Assessments | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Assessments"
        subtitle="Building different types of activities for your class"
      />

      <div className="container my-5">
        <div className="mb-3">
          <Stack spacing={3}>
            {assessments.map((assessment) => {
              const assessmentHref = `/gallery/assessment/${assessment.slug}`;
              return (
                <article key={assessment.slug}>
                  <h3 className="h5">
                    <Link href={assessmentHref}>
                      <a>{assessment.title}</a>
                    </Link>
                  </h3>
                  <p className="mb-0">{assessment.summary}</p>
                </article>
              );
            })}
          </Stack>
        </div>
      </div>

      <DemoCourseAction
        title="Try our demo course!"
        text="Explore the demo course to see how this all come together"
        button="Demo course"
      />
    </React.Fragment>
  );
};

export default AssessmentIndex;

export const getStaticProps: GetStaticProps<AssessmentIndexProps> =
  async () => {
    // Get assessments and filter out only the props we need on this page
    const rawAssessments = await getAssessments();
    const assessments = rawAssessments.map(({ title, slug, summary }) => ({
      title,
      slug,
      summary,
    }));

    return {
      props: {
        assessments,
      },
    };
  };

import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { Heading } from "../../../components/Heading";
import { PageBanner } from "../../../components/Banner";
import { BannerCTA } from "../../../components/CallToActionBanner";
import Stack from "../../../components/Stack";

import { getAssessments } from "../../../lib/catalog/assessments";
import assessmentImage from "../../../lib/images/assessment.png";
import styles from "./index.module.scss";

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

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image
                src={assessmentImage}
                alt="assessment page view"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1">
              <Heading>Assessments</Heading>
              <p>
                Assessments are collections of questions that are graded
                together. Use them to create homeworks, exams, quizzes,
                pre-lecture activities, team assignments, or any other assignment you
                have in your course.
              </p>
              <p>
                An assessment defines point allocations for individual
                questions, rules to control access based on date or user,
                instructions for students, and more!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="my-3">
            <Heading>Assessment Catalog</Heading>
            <Stack spacing={3}>
              {assessments.map((assessment) => {
                const assessmentHref = `/catalog/assessments/${assessment.slug}`;
                return (
                  <article key={assessment.slug}>
                    <h3 className="h5">
                      <Link href={assessmentHref}>{assessment.title}</Link>
                    </h3>
                    <p className="mb-0">{assessment.summary}</p>
                  </article>
                );
              })}
            </Stack>
          </div>
        </div>
      </div>

      <BannerCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
        href="https://us.prairielearn.com/pl/course_instance/4970"
      />
    </React.Fragment>
  );
};

export default AssessmentIndex;

export const getStaticProps: GetStaticProps<
  AssessmentIndexProps
> = async () => {
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

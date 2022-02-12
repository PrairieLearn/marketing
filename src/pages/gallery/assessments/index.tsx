import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import { Heading } from "../../../components/Heading";
import { PageBanner } from "../../../components/Banner";
import { DemoCourseCTA } from "../../../components/DemoCourse";
import { AssessmentCard } from "../../../components/AssessmentCard";
import Stack from "../../../components/Stack";

import { getAssessments } from "../../../lib/gallery/assessments";
import assessmentImage from "../../../lib/images/assessment.png";
import Image from "../../../components/Image";
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
        <title>Assessment | PrairieLearn</title>
      </Head>
      <PageBanner
        title="PrairieLearn Assessments"
        subtitle="Building different types of activities for your class"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image src={assessmentImage} alt="assessment page view" />
            </div>
            <div className="col-md-6 order-1">
              <Heading>Assessments</Heading>
              <p>
                Assessments are collections of questions that are graded
                together. Use them to create homeworks, exams, quizzes,
                pre-lecture activities, group work, or any other assignment you
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
            <Heading>Assessment Gallery</Heading>
            
            <div className={classnames("container-fluid py-4")}>
              <AssessmentCard
                assessmentHref="/assessments/examInstantFeedback"
                readmoreHref=""
                image={assessmentImage}
                title="Auto-graded exam with instant feedback"
                body="Assessments that are auto-graded with instant feedback and retry
              opportunities. An assessment defines point allocations for
              individual questions, rules to control access based on date or
              user, instructions for students, and more!"
              />
            </div>

            <div className={classnames("container-fluid py-4")}>
              <AssessmentCard
                assessmentHref="/assessments/examInstantFeedback"
                readmoreHref=""
                image={assessmentImage}
                title="Group work"
                body="Research shows that collaborative learning can increase 
                student persistence, improve learning outcomes, and foster better 
                classroom cultures. Using PrairieLearn, instructors can provide 
                group activities where students work collaborativelly in the same 
                assessment, which is shared among all the group members. 
                "
              />
            </div>

          </div>
        </div>
      </div>

      {/* <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="my-3">
            <Heading>Assessment Gallery</Heading>
            <Stack spacing={3}>
              {assessments.map((assessment) => {
                const assessmentHref = `/gallery/assessments/${assessment.slug}`;
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
      </div> */}

      <DemoCourseCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
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

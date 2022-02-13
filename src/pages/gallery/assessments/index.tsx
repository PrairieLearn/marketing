import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Heading } from "../../../components/Heading";
import { PageBanner } from "../../../components/Banner";
import { DemoCourseCTA } from "../../../components/DemoCourse";
import { AssessmentCard } from "../../../components/AssessmentCard";

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

            <div className="row">

              <div className="col-sm-6 d-flex align-items-stretch mb-4">
                <AssessmentCard
                  assessmentHref="https://www.prairielearn.org/pl/course_instance/4970/assessment/2316935"
                  readmoreHref="assessments/autogradedExams"
                  title="Auto-graded exam with instant feedback"
                  body="Studies have shown that learning and retention of knowledge 
                  can be improved with the use of frequent formative assessments with 
                  rapid feedback. PrairieLearn auto-grading and randomization features 
                  facilitates the adoption of frequent testing at large scale."
                />
              </div>
              <div className="col-sm-6 d-flex align-items-stretch mb-4">
                <AssessmentCard
                  assessmentHref="https://www.prairielearn.org/pl/course_instance/4970/assessment/2316937"
                  readmoreHref="assessments/masteryHomework"
                  title="Homework based mastery skill approach"
                  body="With PrairieLearn you can deliver your homework in different 
                  formats, from traditional style with one attempt per question, 
                  to a mastery skill approach with retry attempts. 
                  Here we provide a homework example where students need to correctly 
                  answer different variants of the same question to achieve 100% score."
                />
              </div>
              <div className="col-sm-6 d-flex align-items-stretch mb-4">
                <AssessmentCard
                  assessmentHref="https://www.prairielearn.org/pl/course_instance/4970/assessment/2316936"
                  readmoreHref="assessments/preLectureNotebook"
                  title="Pre-lecture assignments with checkpoints"
                  body="Bring active learning experiences to your classroom, by delivering 
                  some of the lecture content in the form of pre-lecture assignments.
                  Use PrairieLearn to create these assignments including short videos, 
                  text, interactive notebooks and short checkpoint questions."
                />
              </div>
              <div className="col-sm-6 d-flex align-items-stretch mb-4">
                <AssessmentCard
                  assessmentHref="https://www.prairielearn.org/pl/course_instance/4970/assessment/2316938"
                  readmoreHref="assessments/groupWork"
                  title="Computer-based collaborative assignments"
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
      </div>

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

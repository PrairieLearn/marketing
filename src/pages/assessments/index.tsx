import React from "react";
import classnames from "classnames";
import Link from "next/link";
import Head from "next/head";

import { AssessmentCard } from "../../components/AssessmentCard";
import { PageBanner } from "../../components/Banner";
import { DemoCourseAction } from "../../components/DemoCourse";
import Stack from "../../components/Stack";
import Image from "../../components/Image";

import styles from "./index.module.scss";
import assessmentImage from "../../lib/images/assessment.png";

export default function Assessment() {
  return (
    <React.Fragment>
      <Head>
        <title>Assessments | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Assessments"
        text="Building different types of activities for your class"
      />

      <div className={classnames("container-fluid py-4", styles.container)}>
        <AssessmentCard
          assessmentHref="/assessments/examInstantFeedback"
          image={assessmentImage}
          title="Auto-graded exam with instant feedback"
          body="Assessments that are auto-graded with instant feedback and retry
        opportunities. An assessment defines point allocations for
        individual questions, rules to control access based on date or
        user, instructions for students, and more!"
        />

        <AssessmentCard
          assessmentHref="/assessments/homework"
          image={assessmentImage}
          title="Homework with unlimited attempts"
          body="Mastery skills"
        />

        <AssessmentCard
          assessmentHref="/assessments/groupWork"
          image={assessmentImage}
          title="Group work"
          body="Collaborative learning activities"
        />

        <AssessmentCard
          assessmentHref="/assessments/preLecture"
          image={assessmentImage}
          title="Pre-lecture with auto-graded checkpoints"
          body="Introducing new concepts online with checkpoints and instant feedback "
        />
      </div>

      <DemoCourseAction
        title="Try our demo course!"
        text="Explore the demo course to see how this all come together"
        button="Demo course"
      />
    </React.Fragment>
  );
}

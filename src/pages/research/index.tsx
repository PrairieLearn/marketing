import React from "react";
import classnames from "classnames";
import Head from "next/head";

import { Heading } from "../../components/Heading";
import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { ResearchCard } from "../../components/ResearchCard";

import assessmentImage from "./figures/beta_quiz.png";
import Image from "../../components/Image";
// import styles from "./index.module.scss";

// import { plcourseURL } from "../../lib/urls";

export default function Assessment() {
  return (
    <React.Fragment>
      <Head>
        <title>Case Studies | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Case Studies"
        subtitle="Collection of research and case studies using PrairieLearn"
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          {/* <div className="my-3">

            <div className="row"> */}
              {/* <div className="col-sm-6 d-flex align-items-stretch mb-4"> */}           
                <ResearchCard
                  //assessmentHref={ plcourseURL.examInstantFeedback }
                  // paperHref="https://www.google.com/"
                  // readmoreHref="assessments/autogradedExams"
                  title="Auto-graded exam with instant feedback"
                  body="Studies have shown that learning and retention of knowledge 
                  can be improved with the use of frequent formative assessments with 
                  rapid feedback. PrairieLearn auto-grading and randomization features 
                  facilitates the adoption of frequent testing at large scale."
                />
              {/* </div> */}
            {/* </div>
          </div> */}
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
import React from "react";
import Head from "next/head";
import classnames from "classnames";
import Link from "next/link";

import { Heading } from "../components/Heading";
import { ExampleQuestion } from "../components/ExampleQuestion";
import { DemoCourseCTA } from "../components/DemoCourse";

import Image from "../components/Image";
import richFBD from "../lib/images/rich_question_FBD.png";
import richorder from "../lib/images/rich_question_order_block.png";
import richball from "../lib/images/rich_question_balltrajectory.png";
import UseEverywhere from "../lib/images/UseEverywhere.png";

import styles from "./index.module.scss";

const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>PrairieLearn</title>
      </Head>

      <div className={classnames("container-fluid py-4", styles.banner)}>
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3">
                <span>PrairieLearn</span>
              </h1>
              <p className="text-white mt-4 fs-3">
                The best platform for online assessments
              </p>
              <a
                href="https://www.prairielearn.org/pl/request_course"
                className="btn btn-light btn-lg me-3"
              >
                Request a course
              </a>
              <Link href="/contact">
                <a className="btn btn-outline-light btn-lg">Get in touch</a>
              </Link>
            </Column>
          </Row>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Heading>Mastering learning meets online assessment</Heading>
          <div className="row">
            <p>
              PrairieLearn is an online assessment and learning system that
              empowers instructors to create robust educational resources to
              students.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 order-1 pt-2">
              <h5>Adaptive question variants with real-time feedback</h5>
              <p>
                Instructors easily write questions as code, which automatically
                generate and grade infinite variants of themselves.
              </p>
              <h5>Empowering students to master content</h5>
              <p>
                Students are encouraged to keep trying new variants of the same
                question until they achieve mastery.
              </p>
            </div>
            <div className="col-md-6 order-2 pt-2">
              <ExampleQuestion />
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <Row>
            <Column>
              <Heading>
                Write questions once, use them many times, everywhere!
              </Heading>
              <p>
                PrairieLearn questions are defined as code, which is what makes
                them so powerful. Once a question is created, it can be reused
                in any future assessment. And students can keep trying new
                variants of difficult problems until they&apos;ve mastered the
                topic—no need for you to manually write new questions.
              </p>
              <Image src={UseEverywhere} alt="assessment page view" />
            </Column>
          </Row>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Heading>Automation without compromising quality </Heading>
          <p>
            When using PrairieLearn, you do not need to be concerned about
            trivialising course material when offering computer-based
            assessments. In addition to standard inputs such as numerical,
            multiple-choice, checkboxes and dropdown menu, PrairieLearn will let
            students provide answers as graphical input, code, ordered blocks
            and much more!
          </p>

          <div className="row">
            <div className="col-md-10">
              <Image src={richFBD} alt="assessment page view" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-1 pt-2">
              <Image src={richorder} alt="assessment page view" />
            </div>
            <div className="col-md-6 order-2 pt-2">
              <Image src={richball} alt="assessment page view" />
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
}

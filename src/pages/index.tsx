import React from "react";
import Head from "next/head";
import classnames from "classnames";
import Link from "next/link";

import Stack from "../components/Stack";
import { Heading } from "../components/Heading";
import { ExampleQuestion } from "../components/ExampleQuestion";
import { DemoCourseCTA } from "../components/DemoCourse";

import Image from "../components/Image";
import richFBD from "../lib/images/rich_question_FBD.png";
import richorder from "../lib/images/rich_question_order_block.png";
import richball from "../lib/images/rich_question_balltrajectory.png";

import styles from "./index.module.scss";
import { Accordion, Carousel, CarouselItem } from "react-bootstrap";

const TALKING_POINTS = [
  {
    header: "In-class activities",
    body: "Build activities to measure understanding during lectures, or create group assignments for lab sessions.",
  },
  {
    header: "Homework",
    body: "Students get instant feedback and can keep attempting problems until they achieve mastery.",
  },
  {
    header: "Practice",
    body: "Because question parameters are randomized, you can give students the chance to practice the same questions that will appear on tests.",
  },
  {
    header: "Testing",
    body: "Run automated tests in proctored facilities, or run bring-your-own-device tests in the classroom or online.",
  },
];

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
                className="btn btn-light btn-lg me-3 mt-3"
              >
                Request a course
              </a>
              <Link href="/contact">
                <a className="btn btn-outline-light btn-lg me-3 mt-3">
                  Get in touch
                </a>
              </Link>
              <a
                href="https://prairielearn.readthedocs.io/en/latest/"
                className="btn btn-outline-light btn-lg me-3 mt-3"
              >
                Documentation
              </a>
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
                Write questions once, use them any time and anywhere
              </Heading>
              <p>
                PrairieLearn questions are defined as code, which is what makes
                them so powerful. Once a question is created, it can be reused
                in any future assessment. And students can keep trying new
                variants of difficult problems until they&apos;ve mastered the
                topic—no need for you to manually write new questions.
              </p>
              <Accordion defaultActiveKey="0">
                {TALKING_POINTS.map((point, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <strong>{point.header}</strong>
                    </Accordion.Header>
                    <Accordion.Body>{point.body}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
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

          <Carousel variant="dark" controls={false}>
            <CarouselItem style={{ aspectRatio: "1 / 1" }}>
              <Image
                src={richorder}
                alt="assessment page view"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="pb-5"
              />
            </CarouselItem>
            <CarouselItem style={{ aspectRatio: "1 / 1" }}>
              <Image
                src={richball}
                alt="assessment page view"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="pb-5"
              />
            </CarouselItem>
            <CarouselItem style={{ aspectRatio: "1 / 1" }}>
              <Image
                src={richFBD}
                alt="assessment page view"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="pb-5"
              />
            </CarouselItem>
          </Carousel>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <Stack>
            <Row>
              <Column>
                <Stack spacing={3}>
                  <Heading>Trusted by the best</Heading>
                  <p>
                    Instructors at top universities in the United States and
                    Canada have been using PrairieLearn to teach the next
                    generation of students.
                  </p>
                </Stack>
              </Column>
            </Row>
            <Row>
              <div className="col-6 col-md-3 mt-2">
                <div className="small text-muted">Universities</div>
                <div className="display-5 lh-1">20+</div>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <div className="small text-muted">Courses</div>
                <div className="display-5 lh-1">750+</div>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <div className="small text-muted">Students</div>
                <div className="display-5 lh-1">180k+</div>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <div className="small text-muted">Questions Graded</div>
                <div className="display-5 lh-1">41M+</div>
              </div>
            </Row>
          </Stack>
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

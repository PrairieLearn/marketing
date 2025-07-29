import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";
import Stack from "../components/Stack";
import { Heading } from "../components/Heading";
import { ExampleQuestion } from "../components/ExampleQuestion";
import { BannerCTA } from "../components/CallToActionBanner";

import richFBD from "../lib/images/rich_question_FBD.png";
import richorder from "../lib/images/rich_question_order_block.png";
import richball from "../lib/images/rich_question_balltrajectory.png";

import styles from "./index.module.scss";
import { Accordion, Carousel, CarouselItem } from "react-bootstrap";
import { RequestCourseModal } from "../components/RequestCourseModal";

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

const CAROUSEL_IMAGES = [
  {
    src: richorder,
    alt: "PrairieLearn question asking students to construct a proof by ordering predefined statements",
  },
  {
    src: richball,
    alt: "PrairieLearn question asking students to sketch a line illustrating the rate of change of a trajectory function",
  },
  {
    src: richFBD,
    alt: "PrairieLearn question asking students to construct a free body diagram",
  },
];

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => (
  <div className="row justify-content-center">{children}</div>
);

interface ColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => (
  <div className="col">{children}</div>
);

interface HomeProps {
  seed: number;
}

const Home: React.FC<HomeProps> = ({ seed }) => {
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>PrairieLearn</title>
      </Head>

      <div className={classnames("container-fluid py-4", styles.banner)}>
        <div className="container-md">
          <Row>
            <Column>
              <h1
                className={classnames(
                  "mt-3 fs-1 text-center text-white",
                  styles["text-wrap-balance"],
                )}
              >
                Empowering learners with equitable and authentic assessments
              </h1>
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <div className="d-inline-flex flex-column">
                  <button
                    className="btn btn-warning btn-lg me-3 mt-3"
                    onClick={() => setShowRequestCourseModal(true)}
                  >
                    Start now for free!
                  </button>
                </div>
                <Link
                  href="https://calendly.com/marianapl"
                  className="btn btn-warning btn-lg me-3 mt-3"
                >
                  Schedule a Demo
                </Link>
              </div>
            </Column>
          </Row>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="container-md">
          <Heading>Mastery learning meets online assessment</Heading>
          <div className="row">
            <p>
              PrairieLearn is an online assessment and learning system that
              empowers instructors to create robust educational resources for
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
              <ExampleQuestion seed={seed} />
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

      <div className="container-fluid py-4">
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
            {CAROUSEL_IMAGES.map(({ src, alt }, index) => (
              <CarouselItem key={index}>
                <div
                  style={{
                    maxWidth: "750px",
                    position: "relative",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    className="pb-5 position-relative"
                    priority
                    style={{
                      aspectRatio: "3 / 2",
                      objectFit: "contain",
                      objectPosition: "center",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
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

      <div className="py-4 bg-dark">
        <div className="container-md">
          <Row>
            <Column>
              <h2 className="text-white">Open-source. Forever.</h2>
              <p className="text-white ">
                PrairieLearn began life as open-source software, and we&apos;re
                committed to making sure it stays that way. With an active
                developer community of professors, course staff, and students,
                PrairieLearn gets better all the time.
              </p>
              <div className="d-flex">
                <a
                  href="https://github.com/PrairieLearn/PrairieLearn"
                  className="btn btn-light me-3"
                >
                  GitHub →
                </a>
                <a
                  href="https://prairielearn.readthedocs.io/en/latest/"
                  className="btn btn-light"
                >
                  Documentation →
                </a>
              </div>
            </Column>
          </Row>
        </div>
      </div>

      <BannerCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together."
        buttonLabel="Demo course"
        href="https://us.prairielearn.com/pl/course_instance/4970"
      />

      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      seed: Math.random(),
    },
  };
};

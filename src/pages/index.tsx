import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import { PageBanner } from "../components/Banner";
import { HomepageHeading } from "../components/HomepageHeading";
import { ExampleEditor } from "../components/ExampleEditor";
import { ExampleQuestion } from "../components/ExampleQuestion";
import Stack from "../components/Stack";

const DEMO_QUESTION_HTML = `
<pl-question-panel>
  <p>
    Suppose a ball is thrown from a level surface at a
    {{params.angle}}° angle with a velocity of
    {{params.velocity}}m/s. How far will the ball travel?
  </p>
</pl-question-panel>
<pl-integer-input answers-name="distance" suffix="m"><pl-integer-input>
`.trim();

const DEMO_QUESTION_PYTHON = `
import math, random
def generate(data):
  velocity = random.randint(100, 800) / 100
  angle = random.randint(2000, 8000) / 100
  distance = (math.sin(2 * math.radians(angle)) * velocity**2) / 9.8
  data["params"]["velocity"] = velocity
  data["params"]["angle"] = angle
  data["answers"]["distance"] = distance
`.trim();

const Container: React.FC = ({ children }) => (
  <div className="container-md my-5">{children}</div>
);

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
      <PageBanner
        title="The best platform for online assessments"
        text="PrairieLearn empowers instructors to build content that helps their students achieve mastery."
      />
      <div className="container-fluid py-4">
        <div className="container-md">
        <a
          href="https://prairielearn.readthedocs.io/en/latest/"
          className="btn btn-primary btn-lg me-3"
        >
          Documentation
        </a>
        </div>
      </div>
      <Container>
        <Stack spacing={5}>
          <Row>
            <Column>
              <Stack spacing={3}>
                <HomepageHeading>Write once, use forever</HomepageHeading>
                <p>
                  Once a question has been defined in code, it can be reused in
                  any future assessment. And students can keep trying new
                  variants of difficult problems until they've mastered the
                  topic—no need for you to manually write new questions.
                </p>
                <ExampleQuestion />
              </Stack>
            </Column>
          </Row>
          <Row>
            <Column>
              <Stack spacing={3}>
                <HomepageHeading>Limitless flexibility</HomepageHeading>
                <p>
                  From{" "}
                  <Link href="https://prairielearn.readthedocs.io/en/latest/externalGrading/">
                    code autograding
                  </Link>{" "}
                  and{" "}
                  <Link href="https://prairielearn.readthedocs.io/en/latest/workspaces/">
                    in-browser IDEs
                  </Link>{" "}
                  to{" "}
                  <Link href="https://prairielearn.readthedocs.io/en/latest/assessment/#enabling-group-work-for-collaborative-assessments">
                    collaborative assignments
                  </Link>{" "}
                  and{" "}
                  <Link href="https://prairielearn.readthedocs.io/en/latest/devElements/">
                    custom elements
                  </Link>
                  , PrairieLearn provides a powerful foundation for your
                  assignments and assessments.
                </p>
              </Stack>
            </Column>
          </Row>
          <Stack spacing={1}>
            <Row>
              <Column>
                <Stack spacing={3}>
                  <HomepageHeading>Trusted by the best</HomepageHeading>
                  <p>
                    Instructors at top universities in the United States and
                    Canada have been using PrairieLearn to teach the next
                    generation of engineers, scientists, and businesspeople.
                  </p>
                </Stack>
              </Column>
            </Row>
            <Row>
              <div className="col-6 col-md-3">
                <div className="small text-muted">Students</div>
                <div className="display-5 lh-1">15,000+</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="small text-muted">Courses</div>
                <div className="display-5 lh-1">100+</div>
              </div>
            </Row>
          </Stack>
        </Stack>
      </Container>
      <div className="my-5 py-5 bg-dark">
        <div className="container-md">
          <Row>
            <Column>
              <h2 className="text-white">Open-source. Forever.</h2>
              <p className="text-white ">
                PrairieLearn began life as open-source software, and we're
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
      <Container>
        <Row>
          <Column>
            <HomepageHeading>Get started</HomepageHeading>
            <p>
              New to PrairieLearn? Check out the{" "}
              <Link href="/gallery">
                <a>question gallery</a>
              </Link>{" "}
              to see what's possible with PrairieLearn, or head over to{" "}
              <a href="https://prairielearn.readthedocs.io/en/latest/">
                the documentation
              </a>{" "}
              to learn how to set up PrairieLearn on your computer and start
              creating content.
            </p>
            <p>
              Looking for managed hosting, instructional workshops, and direct
              support? Want a personalized demo of all PrairieLearn has to
              offer? Reach out to us, and we'll get back to you with more
              details.
            </p>
            <Link href="/contact">
              <a className="btn btn-primary btn-lg">Get in touch</a>
            </Link>
          </Column>
        </Row>
      </Container>
    </React.Fragment>
  );
}

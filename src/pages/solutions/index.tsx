import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import { PageBanner } from "../../components/Banner";
import { HomepageHeading } from "../../components/HomepageHeading";
import { ExampleEditor } from "../../components/ExampleEditor";
import { ExampleQuestion } from "../../components/ExampleQuestion";
import Stack from "../../components/Stack";

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

export default function Solutions() {
  return (
    <React.Fragment>
      <Head>
        <title>PrairieLearn</title>
      </Head>
      <PageBanner
        title="PrairieLearn: The best platform for online assessments"
        text="PrairieLearn empowers instructors to build content that helps their students achieve mastery"
      />

      <Container>
        <Stack spacing={5}>
          <Row>
            <Column>
              <Stack spacing={3}>
                <HomepageHeading>Questions as code</HomepageHeading>
                <p>
                  PrairieLearn questions are defined as code, which is what
                  makes them so powerful. The familiar HTML syntax and Mustache
                  templates make it easy to get started writing questions. A
                  broad variety of building blocks like number inputs and
                  multiple choice responses come built-in, so you can hit the
                  ground running.
                </p>
                <ExampleEditor
                  files={[
                    {
                      filename: "question.html",
                      language: "markup",
                      code: DEMO_QUESTION_HTML,
                    },
                  ]}
                />
              </Stack>
            </Column>
          </Row>
          <Row>
            <Column>
              <Stack spacing={3}>
                <HomepageHeading>
                  Automatic generation and grading
                </HomepageHeading>
                <p>
                  Once you&apos;ve defined an HTML template, generate parameters
                  for your question with the power of Python and popular
                  libraries like numpy and matplotlib. And questions grade
                  themselves, from simple multiple-choice questions to free-body
                  diagrams to code, so instructors can focus on the important
                  things.
                </p>
                <ExampleEditor
                  files={[
                    {
                      filename: "server.py",
                      language: "python",
                      code: DEMO_QUESTION_PYTHON,
                    },
                  ]}
                />
              </Stack>
            </Column>
          </Row>
          <Row>
            <Column>
              <Stack spacing={3}>
                <HomepageHeading>Write once, use forever</HomepageHeading>
                <p>
                  Once a question has been defined in code, it can be reused in
                  any future assessment. And students can keep trying new
                  variants of difficult problems until they&apos;ve mastered the
                  topic—no need for you to manually write new questions.
                </p>
                <ExampleQuestion />
              </Stack>
            </Column>
          </Row>
        </Stack>
      </Container>

      <Container>
        <Row>
          <Column>
            <HomepageHeading>Get started</HomepageHeading>
            <p>
              New to PrairieLearn? Check out the{" "}
              <Link href="/gallery">
                <a>question gallery</a>
              </Link>{" "}
              to see what&apos;s possible with PrairieLearn, or head over to{" "}
              <a href="https://prairielearn.readthedocs.io/en/latest/">
                the documentation
              </a>{" "}
              to learn how to set up PrairieLearn on your computer and start
              creating content.
            </p>
            <p>
              Looking for managed hosting, instructional workshops, and direct
              support? Want a personalized demo of all PrairieLearn has to
              offer? Reach out to us, and we&apos;ll get back to you with more
              details.
            </p>
            <Link href="/contact">
              <a className="btn btn-primary btn-lg">Get in touch</a>
            </Link>
          </Column>
        </Row>
      </Container>

      <PageBanner
        title="PrairieTest: exam scheduling and proctoring system"
        text="Secure exams with flexible scheduling"
      />
      <Container>
        <p>
          PrairieTest enables instructors to deliver secure synchronous and
          asynchronous exams with flexible scheduling for both in-person and
          online format with Zoom proctoring options.
        </p>
      </Container>
    </React.Fragment>
  );
}

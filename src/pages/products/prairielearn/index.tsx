import React from "react";
import classnames from "classnames";
import Head from "next/head";
import Link from "next/link";

import { PageBanner } from "../../../components/Banner";
import { DemoCourseCTA } from "../../../components/DemoCourse";
import { Heading } from "../../../components/Heading";
import { ExampleEditor } from "../../../components/ExampleEditor";
import { ExampleQuestion } from "../../../components/ExampleQuestion";
import Stack from "../../../components/Stack";

import styles from "./index.module.scss";
import { Accordion } from "react-bootstrap";

const TALKING_POINTS = [
  {
    header: "Rich questions",
    body: "Create rich questions using built-in and reusable html building blocks called PrairieLearn Elements.",
    ref: "https://prairielearn.readthedocs.io/en/latest/elements/",
  },
  {
    header: "Code autograders",
    body: "Run built-in or custom grading scripts in secure environments.",
    ref: "https://prairielearn.readthedocs.io/en/latest/externalGrading/",
  },
  {
    header: "In-browser IDEs",
    body: "Provide students with persistent remote containers via in-browser frontends such as VS Code and JupyterLab.",
    ref: "https://prairielearn.readthedocs.io/en/latest/workspaces/",
  },
  {
    header: "Collaborative assignments",
    body: "Allow students to work in collaborative assessments that are shared among all group members.",
    ref: "https://prairielearn.readthedocs.io/en/latest/assessment/#enabling-group-work-for-collaborative-assessments",
  },
  {
    header: "Custom elements",
    body: "Cannot find a built-in PrairieLearn Element that satisfies your need? Do not worry, you can create your own custom element!",
    ref: "https://prairielearn.readthedocs.io/en/latest/devElements/",
  },
  {
    header: "Contribute to main source code",
    body: "Created your own Element and want to contribute back to the main code? Or want to add new features? PrairieLearn is an open-source software with an active developer community of professors, course staff, and students.",
    ref: "https://prairielearn.readthedocs.io/en/latest/dev-guide/",
  },
];

const DEMO_QUESTION_HTML = `
<pl-question-panel>
  <p>
    Suppose a ball is thrown from a level surface at a
    {{params.angle}}° angle with a velocity of
    {{params.velocity}}m/s. How far will the ball travel?
  </p>
</pl-question-panel>
<pl-integer-input answers-name="distance" suffix="m"></pl-integer-input>
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

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>PrairieLearn | PrairieLearn</title>
      </Head>

      <PageBanner
        title="PrairieLearn"
        subtitle="Providing limitless flexibility so that you can create your personalized course"
      />

      <Container>
        <Stack spacing={5}>
          <Row>
            <Column>
              <Stack spacing={3}>
                <Heading>Questions as code</Heading>
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
                <Heading>Automatic generation and grading</Heading>
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
                <Heading>Write once, use forever</Heading>
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

      <div className={classnames("container-fluid py-4 ", styles.container)}>
        <div className="container-md pb-4">
          <Heading>Limitless flexibility</Heading>
          <p>
            {" "}
            PrairieLearn provides you with full control on how you create your
            questions.
          </p>
          <Accordion defaultActiveKey="0">
            {TALKING_POINTS.map((point, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <strong>{point.header}</strong>
                </Accordion.Header>
                <Accordion.Body>
                  {point.body} Read more <Link href={point.ref}>here</Link>.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
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

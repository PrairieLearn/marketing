import React from "react";
import Head from "next/head";
import Link from "next/link";

import { HomepageHero } from "../components/HomepageHero";
import { HomepageHeading } from "../components/HomepageHeading";
import { ExampleEditor } from "../components/ExampleEditor";
import { ExampleQuestion } from "../components/ExampleQuestion";
import { HomepageRow } from "../components/HomepageRow";
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

const DEMO_PYTHON_GRADER = `
def grade(data):
  # pass
`.trim();

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>PrairieLearn</title>
      </Head>
      <HomepageHero />
      <div className="container-md mt-3 mt-md-5">
        <Stack spacing={5}>
          <Stack spacing={1}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <HomepageHeading>Questions as code</HomepageHeading>
                <p>
                  PrairieLearn questions are defined as code, which is what
                  makes them so powerful. The familiar HTML syntax and Mustache
                  templates make it easy to get started writing questions. A
                  broad variety of building blocks like number inputs and
                  multiple choice responses come built-in, so you can hit the
                  ground running.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ExampleEditor
                  files={[
                    {
                      filename: "question.html",
                      language: "markup",
                      code: DEMO_QUESTION_HTML,
                    },
                  ]}
                />
              </div>
            </div>
          </Stack>
          <Stack spacing={1}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <HomepageHeading>
                  Automatic generation and grading
                </HomepageHeading>
                <p>
                  Once you've defined an HTML template, generate parameters for
                  your question with the power of Python and popular libraries
                  like numpy and matplotlib. And questions grade themselves,
                  from simple multiple-choice questions to free-body diagrams to
                  code, so instructors can focus on the important things.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Stack spacing={3}>
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
              </div>
            </div>
          </Stack>
          <Stack spacing={1}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <HomepageHeading>Write once, use forever</HomepageHeading>
                <p>
                  Once a question has been defined in code, it can be reused in
                  any future assessment. And students can keep trying new
                  variants of difficult problems until they've mastered the
                  topic—no need for you to manually write new questions.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ExampleQuestion />
              </div>
            </div>
          </Stack>
          <div className="row justify-content-center">
            <div className="col-lg-8">
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
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <HomepageHeading>Trusted by the best</HomepageHeading>
                <p>
                  Instructors at top universities in the United States and
                  Canada have been using PrairieLearn to teach the next
                  generation of engineers, scientists, and businesspeople.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 col-md-3">
                <div className="small text-muted">Students</div>
                <div className="display-5 lh-1">15,000+</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="small text-muted">Courses</div>
                <div className="display-5 lh-1">100+</div>
              </div>
            </div>
          </div>
        </Stack>
      </div>
      <div className="mt-3 mt-md-5 py-3 py-md-5 bg-dark">
        <div className="container-md">
          <div className="row justify-content-center">
            <div className="col-lg-8">
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
            </div>
          </div>
        </div>
      </div>
      <div className="container-md my-3 my-md-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
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
            <a
              href="mailto:hello@prairielearn.com"
              className="btn btn-primary btn-lg"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

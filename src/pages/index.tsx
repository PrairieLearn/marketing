import React from "react";

import { HomepageHero } from "../components/HomepageHero";
import { HomepageHeading } from "../components/HomepageHeading";
import { ExampleEditor } from "../components/ExampleEditor";
import { ExampleQuestion } from "../components/ExampleQuestion";
import { HomepageRow } from "../components/HomepageRow";
import { Link } from "../components/Link";

const DEMO_QUESTION_HTML = `
<pl-question-panel>
  <p>
    Suppose a ball is thrown from a level surface at a
    {{params.angle}}° angle with a velocity of
    {{params.velocity}} m/s. How far will the ball travel?
  </p>
</pl-question-panel>
<pl-integer-input answers-name="distance" suffix="m/s"><pl-integer-input>
`.trim();

const DEMO_QUESTION_PYTHON = `
import math, random
def generate(data):
  velocity = random.randint(100, 800) / 100
  angle = random.randint(2000, 8000) / 100
  distance = (math.cos(math.radians(angle)) * velocity * velocity) / 9.8
  data["params"]["velocity"] = velocity
  data["params"]["angle"] = angle
  data["answers"]["distance"] = answer
`.trim();

const DEMO_PYTHON_GRADER = `
def grade(data):
  # pass
`.trim();

export default function Home() {
  return (
    <React.Fragment>
      <HomepageHero />
      <div className="container mt-3 mt-md-5">
        <HomepageRow>
          <div className="col-md-6">
            <HomepageHeading>Simple yet powerful</HomepageHeading>
            <p>
              PrairieLearn's familiar HTML syntax makes it easy to get started
              writing questions. A broad variety of building blocks like number
              inputs and multiple choice responses come built-in, so you can hit
              the ground running. One you're ready, you can take advantage of
              powerful features like{" "}
              <Link href="https://prairielearn.readthedocs.io/en/latest/externalGrading/">
                code autograding
              </Link>{" "}
              and{" "}
              <Link href="https://prairielearn.readthedocs.io/en/latest/workspaces/">
                in-browser IDEs
              </Link>
              .
            </p>
          </div>
          <div className="col-md-6">
            <ExampleEditor
              files={[
                {
                  filename: "question.html",
                  language: "markup",
                  code: DEMO_QUESTION_HTML,
                },
                {
                  filename: "server.py",
                  language: "python",
                  code: DEMO_QUESTION_PYTHON,
                },
              ]}
            />
          </div>
        </HomepageRow>
        <HomepageRow>
          <div className="col-md-6 order-1 order-md-0">
            <ExampleQuestion />
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <HomepageHeading>Write once, use forever</HomepageHeading>
            <p>
              Once a question has been defined in code, it can be reused in any
              future assessment. And students can keep trying new variants of
              difficult questions until they've mastered the topic—without the
              need to manually write new questions.
            </p>
          </div>
        </HomepageRow>
        <HomepageRow>
          <div className="col-md-6">
            <HomepageHeading>Save time grading</HomepageHeading>
            <p>
              From simple multiple-choice questions to free-body diagrams to
              code, questions grade themselves, so instructors can focus on the
              important things.
            </p>
          </div>
          <div className="col-md-6">
            <ExampleEditor
              files={[
                {
                  filename: "server.py",
                  language: "python",
                  code: DEMO_PYTHON_GRADER,
                },
              ]}
            />
          </div>
        </HomepageRow>
        <HomepageHeading>Trusted by the best</HomepageHeading>
        <HomepageRow>
          <div className="col-md-6">
            <p>
              Instructors at top universities in the United States and Canada
              have used PrairieLearn to teach the next generation of engineers,
              scientists, and businesspeople.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <div className="small text-muted">Students</div>
            <div className="display-5 lh-1">40,000</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="small text-muted">Courses</div>
            <div className="display-5 lh-1">300</div>
          </div>
        </HomepageRow>
      </div>
    </React.Fragment>
  );
}

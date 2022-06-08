import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";

export default function Courses() {
  return (
    <React.Fragment>
      <Head>
        <title>Courses | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Courses"
        subtitle="Collections of assessments and questions"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <Heading>Courses</Heading>
          <p>
            Courses are home to all the{" "}
            <Link href="/gallery/assessments">assessments</Link> and{" "}
            <Link href="/gallery/questions">questions</Link> you have created.
          </p>

          <h3 className="h4">
            <a href="https://www.prairielearn.org/pl/course_instance/128979">
              UIUC CS 233
            </a>
          </h3>
          <p>
            This course teaches the fundamentals of computer architecture,
            including digital logic design, machine-level programming, and
            performance models of modern computer hardware. Its PrairieLearn
            questions include a variety of novel problem types, including
            randomly-generated state machines, ALUs, truth tables, and more.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

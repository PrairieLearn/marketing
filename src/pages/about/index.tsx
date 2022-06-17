import React from "react";
import classnames from "classnames";
import Head from "next/head";

import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";

import styles from "./index.module.scss";

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About | PrairieLearn</title>
      </Head>

      <PageBanner
        title="About us"
        subtitle="We are passionate about teaching and strive to deliver the best course material to our students."
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>Built by professors and students!</Heading>
              <p>
                We believe that students should have access to quality education
                from anywhere in the world, and that instructors should have an
                adaptable platform to deliver that education.
              </p>
              <p>
                With PrairieLearn, we have opened the door for instructors to
                improve their teaching workflow without compromising the quality
                of education they are delivering to students.
              </p>
            </Stack>
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

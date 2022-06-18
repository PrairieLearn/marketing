import React from "react";
import classnames from "classnames";
import Head from "next/head";

import { PageBanner } from "../../../components/Banner";
import { DemoCourseCTA } from "../../../components/DemoCourse";
// import { Heading } from "../../components/Heading";
// import Stack from "../../components/Stack";

import styles from "./index.module.scss";

export default function Testing() {
  return (
    <React.Fragment>
      <Head>
        <title>Testing | PrairieLearn</title>
      </Head>

      <PageBanner title="Scaling Testing" subtitle="bla" />

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          {/* <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>
                Mastery learning, randomized assessments and instant feedback
              </Heading>

            </Stack>
          </Stack> */}
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

import React from "react";
import classnames from "classnames";
import Head from "next/head";
import Link from "next/link";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import Stack from "../../../components/Stack";

import styles from "./index.module.scss";

export default function Testing() {
  return (
    <React.Fragment>
      <Head>
        <title>PrairieTest | PrairieLearn</title>
      </Head>

      <PageBanner title="PrairieTest" subtitle="Making the logistics and delivery of exams a painless process" />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>
                Delivering exams at a computer-based testing facility
              </Heading>

              <p>add text here; we should also add a photo</p>

            </Stack>
          </Stack>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>
                Running Bring-Your-Own-Device exams in classrooms or online
              </Heading>

              <p>add text here; we should also add a photo</p>

            </Stack>
          </Stack>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.demo_container)}>
        <div className="container-md">
          <div className="row">
            <div className="col">
              <h3 className="text-white display-6">Do you want to learn more?</h3>
            </div>
          </div>
          <div className="row justify-content-center my-2">
            <div className="col-md-12 text-center">
              <Link href="/contact">
                <a className="btn btn-warning btn-lg">Request a demo</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

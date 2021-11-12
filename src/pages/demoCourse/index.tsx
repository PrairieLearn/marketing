import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import ContainerStyle from "../../components/Container.module.scss";

import NextImage from "next/image";
import assessmentImage from "../../lib/images/assessment.png";

const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

export default function Research() {
  return (
    <React.Fragment>
      <Head>
        <title>Demo Course | PrairieLearn</title>
      </Head>
      <div
        className={classnames("container-fluid py-4", ContainerStyle.container)}
      >
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3">Demo Course</h1>
              <p className="text-white mt-4 fs-3">
                Building interesting questions and unique assessments for
                different contexts!
              </p>
            </Column>
          </Row>
        </div>
      </div>


      <div
        className={classnames(
          "container-fluid py-4"
        )}
      >
        <div className="row justify-content-center my-5">
          <div className="col-md-12">
            <img src="../../lib/images/assessment.png"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center pb-3">
            <Link href="https://www.prairielearn.org/pl/course_instance/128605">
              <a className="btn btn-warning btn-lg">
                Test our demo course!
              </a>
            </Link>
          </div>
        </div>

      </div>

    </React.Fragment>
  );
}

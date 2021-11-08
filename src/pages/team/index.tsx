import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";
import { getQuestions } from "../../lib/gallery/questions";

import ContainerStyle from "../../components/Container.module.scss";
import styles from "./index.module.scss";
import Stack from "../../components/Stack";

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
        <title>Research | PrairieLearn</title>
      </Head>
      <div className={classnames("container-fluid py-4", ContainerStyle.container)}>
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3">Meet our team!</h1>
              <p className="text-white mt-4 fs-3">
              bla
              </p>
            </Column>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

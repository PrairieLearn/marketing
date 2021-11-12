import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import styles from "./index.module.scss";
import { PageBanner } from "../../components/Banner";

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
      <PageBanner
        title="Research"
        text="Educational studies based on PrairieLearn data"
      />

      <div className="row justify-content-center my-2">
        <div className="col-md-12 text-center">
          <Link href="/references">
            <a className="btn btn-warning btn-lg">References</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

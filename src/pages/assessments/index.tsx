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

export default function Assessments() {
  return (
    <React.Fragment>
      <Head>
        <title>Assessments | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Assessments"
        text="Building different types of activities for your class"
      />


    </React.Fragment>
  );
};

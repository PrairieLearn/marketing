import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import styles from "./index.module.scss";
import { PageBanner } from "../../components/Banner";
import { ButtonToPage } from "../../components/ButtonToPage";


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

      <ButtonToPage
        text="References"
        page="/references"
      />

    </React.Fragment>
  );
}

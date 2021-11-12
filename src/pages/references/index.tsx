import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import styles from "./index.module.scss";
import { PageBanner } from "../../components/Banner";

export default function References() {
  return (
    <React.Fragment>
      <Head>
        <title>References | PrairieLearn</title>
      </Head>
      <PageBanner
        title="References"
        text="Educational research studies"
      />

    </React.Fragment>
  );
}

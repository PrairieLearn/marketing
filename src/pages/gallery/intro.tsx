import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import styles from "./index.module.scss";
import { PageBanner } from "../../components/Banner";

export default function QuestionIntro() {
  return (
    <React.Fragment>
      <Head>
        <title>Question intro | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Introduction to PrairieLearn questions"
        text="not sure how to add the markdown text here..."
      />

    </React.Fragment>
  );
}

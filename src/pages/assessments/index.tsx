import React from "react";
import Link from "next/link";
import Head from "next/head";

import { PageBanner } from "../../components/Banner";

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
}

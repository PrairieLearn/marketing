import React from "react";
import Head from "next/head";
import classnames from "classnames";

import { ContactUsForm } from "../../components/ContactUsForm";
import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { HomepageHeading } from "../../components/HomepageHeading";

import styles from "./index.module.scss";

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact us | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Ready to get started?"
        subtitle="Request your course space here"
      />

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <HomepageHeading>Contact us!</HomepageHeading>
          </div>
          <div className="row">
            <div className="col-md-12">
              Need to schedule a demo? Want to have access to your own course
              space? Let us know below and someone from our team will be in
              touch soon.
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col col-md-8">
            <ContactUsForm showHeader={false} />
          </div>
        </div>
      </div>

      <DemoCourseCTA
        title="View demo course!"
        subtitle="Too busy to schedule a demo? You can test the demo course on your own, before requesting your course space."
        buttonLabel="Demo course"
      />
    </React.Fragment>
  );
}

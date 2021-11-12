import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import { HomepageHeading } from "../../components/HomepageHeading";
import { ContactUsForm } from "../../components/ContactUsForm";
import { PageBanner } from "../../components/Banner";
import { DemoCourseAction } from "../../components/DemoCourse";

import ContainerStyle from "../../components/Container.module.scss";
import styles from "./index.module.scss";

const Container: React.FC = ({ children }) => (
  <div className="container-md my-5">{children}</div>
);

const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Sign In | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Ready to get started?"
        text="Request your course space here"
      />

      <div
        className={classnames(
          "container-fluid py-4",
          ContainerStyle.grayContainer
        )}
      >
        <div className="container-md">
          <div className="row">
            <h2 className={classnames("pb-3", styles.heading)}>Contact us!</h2>
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

      <DemoCourseAction
        title="Try our demo course!"
        text="Too busy to schedule a demo? You can test the demo course on your own, before you request your course space."
        button="Demo course"
      />
    </React.Fragment>
  );
}

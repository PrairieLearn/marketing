import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import { HomepageHeading } from "../../components/HomepageHeading";
import { ContactUsForm } from "../../components/ContactUsForm";

import ContainerStyle from "../../components/Container.module.scss";

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
      <div className={classnames("container-fluid py-4", ContainerStyle.container)}>
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3 pb-4">Ready to get started?</h1>
              <p className="text-white">
              Need to schedule a demo?
              Want to have access to your own course space?
              Want to learn more about how PrairieLearn can help your course or
              institution?
              Let us know below and someone from our team will be in touch soon.
              </p>
            </Column>
          </Row>
        </div>
      </div>
      <div className={classnames("container-fluid py-4", ContainerStyle.grayContainer)}>
        <div className="row justify-content-center my-5">
          <div className="col col-md-8">
            <ContactUsForm showHeader={false} />
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", ContainerStyle.container)}>
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3 pb-4">Try our demo course!</h1>
              <p className="text-white">
                Too busy to schedule a demo? You can test our demo course on your own, before you request your course space.
              </p>
              <div className="row justify-content-center my-4">
                <div className="col-md-12 text-center">
                  <Link href="https://www.prairielearn.org/pl/course_instance/128605">
                    <a className="btn btn-light btn-lg">Test our demo course!</a>
                  </Link>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { PageBanner } from "../../components/Banner";

export default function Demo() {
  return (
    <React.Fragment>
      <Head>
        <title>Schedule a Demo | PrairieLearn</title>
      </Head>

      <PageBanner title="Schedule a Demo" />

      <div className="container-fluid py-5">
        <div className="container-md">
          <div className="row g-5">
            <div className="col-md-6">
              <h2 className="h3">PrairieLearn</h2>
              <p className="lead">
                The most comprehensive assessment platform.
              </p>
              <p>
                Want to know more about how to create sophisticated assessments
                and questions in PrairieLearn?
              </p>
              <p>
                <Link href="/">Learn more about PrairieLearn &rarr;</Link>
              </p>
              <Link
                href="https://calendly.com/serena-prairielearn/prairielearn-demo-1-1"
                className="btn btn-warning btn-lg"
              >
                Schedule a PrairieLearn Demo
              </Link>
            </div>

            <div className="col-md-6">
              <h2 className="h3">PrairieTest</h2>
              <p className="lead">
                Delivering exams at scale in testing centers.
              </p>
              <p>
                Want to know more about how to run testing centers using our
                powerful exam management system PrairieTest?
              </p>
              <p>
                <Link href="/products/prairietest">
                  Learn more about PrairieTest &rarr;
                </Link>
              </p>
              <Link
                href="https://calendly.com/jsos1298/30min"
                className="btn btn-warning btn-lg"
              >
                Schedule a PrairieTest Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

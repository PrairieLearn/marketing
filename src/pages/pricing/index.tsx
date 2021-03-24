import React from "react";
import Head from "next/head";
import Link from "next/link";

import Stack from "../../components/Stack";

export default function Pricing() {
  return (
    <React.Fragment>
      <Head>
        <title>Pricing | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Pricing</h1>
        </div>
        <Stack>
          <div className="card shadow-sm">
            <div className="card-body">
              <Stack spacing={2}>
                <h2 className="card-title h4">Basic</h2>
                <div>
                  <strong>$6</strong>{" "}
                  <span className="text-muted">/ student / course</span>
                </div>
                <ul>
                  <li>Unlimited instructors</li>
                  <li>Real-time automated grading</li>
                  <li>Assessment statistics</li>
                  <li>Data exporting</li>
                  <li>API access</li>
                </ul>
                <Link href="/pricing/contact">
                  <a className="btn btn-outline-primary">Get started</a>
                </Link>
              </Stack>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <Stack spacing={2}>
                <h2 className="card-title h4">Premium</h2>
                <div>
                  <strong>$12</strong>{" "}
                  <span className="text-muted">/ student / course</span>
                </div>
                <div>
                  All the features from <strong>Basic</strong>, plus:
                  <ul>
                    <li>Code autograding</li>
                    <li>Workspaces</li>
                  </ul>
                </div>
                <Link href="/pricing/contact">
                  <a className="btn btn-primary">Get started</a>
                </Link>
              </Stack>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <Stack spacing={2}>
                <h2 className="card-title h4">Enterprise</h2>
                <div>
                  <span className="text-muted">Custom pricing</span>
                </div>
                <div>
                  All fetures from <strong>Basic</strong> and{" "}
                  <strong>Premium</strong>, plus:
                  <ul>
                    <li>LMS integration</li>
                    <li>Single sign-on (SSO) support</li>
                    <li>Custom service agreement</li>
                  </ul>
                </div>
                <a
                  href="mailto:hello@prairielearn.com"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Contact us
                </a>
              </Stack>
            </div>
          </div>
        </Stack>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import Head from "next/head";
import Link from "next/link";

import CheckIcon from "../../components/CheckIcon";
import Stack from "../../components/Stack";
import { PageBanner } from "../../components/Banner";

import styles from "./index.module.scss";

const FEATURES = [
  {
    name: "Unlimited instructors",
    suppport: [true, true, true],
  },
  {
    name: "Real-time automated grading",
    suppport: [true, true, true],
  },
  {
    name: "Assessment statistics",
    suppport: [true, true, true],
  },
  {
    name: "Data exporting",
    suppport: [true, true, true],
  },
  {
    name: "API access",
    suppport: [true, true, true],
  },
  {
    name: "Code autograding",
    suppport: [false, true, true],
  },
  {
    name: "Workspaces",
    suppport: [false, true, true],
  },
  {
    name: "LMS integration",
    suppport: [false, false, true],
  },
  {
    name: "Single sign-on (SSO) support",
    suppport: [false, false, true],
  },
  {
    name: "Custom service agreement",
    suppport: [false, false, true],
  },
];

export default function Pricing() {
  return (
    <React.Fragment>
      <Head>
        <title>Pricing | PrairieLearn</title>
      </Head>
      <PageBanner title="Pricing" subtitle="" />;
      <div className="container my-5">
        <Stack>
          <div className="container">
            <div className="row gy-3">
              <div className="col-md">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <Stack spacing={3}>
                      <h2 className="card-title h4">Basic</h2>
                      <div>
                        <strong>$6</strong>{" "}
                        <span className="text-muted">/ student / course</span>
                      </div>
                      <Link href="/pricing/contact">
                        <a className="btn btn-outline-primary">Get started</a>
                      </Link>
                    </Stack>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <Stack spacing={3}>
                      <h2 className="card-title h4">Premium</h2>
                      <div>
                        <strong>$12</strong>{" "}
                        <span className="text-muted">/ student / course</span>
                      </div>
                      <Link href="/pricing/contact">
                        <a className="btn btn-primary">Get started</a>
                      </Link>
                    </Stack>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <Stack spacing={3}>
                      <h2 className="card-title h4">Enterprise</h2>
                      <div>
                        <span className="text-muted">Custom pricing</span>
                      </div>
                      <Link href="/pricing/contact">
                        <a className="btn btn-primary">Contact us</a>
                      </Link>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className={styles.column}>Features</th>
                  <th className={styles.column}>
                    Basic
                    <div className="small fw-normal">
                      <strong>$6</strong>{" "}
                      <span className="text-muted">/ student / course</span>
                    </div>
                  </th>
                  <th className={styles.column}>
                    Premium
                    <div className="small fw-normal">
                      <strong>$12</strong>{" "}
                      <span className="text-muted">/ student / course</span>
                    </div>
                  </th>
                  <th className={styles.column}>
                    Enterprise
                    <div className="small fw-normal text-muted">
                      Custom pricing
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature) => (
                  <tr key={feature.name}>
                    <th>{feature.name}</th>
                    {feature.suppport.map((support, i) => (
                      <td className="align-middle" key={i}>
                        {support ? <CheckIcon /> : <span>-</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Stack>
      </div>
    </React.Fragment>
  );
}

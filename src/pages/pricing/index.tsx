import React from "react";
import Head from "next/head";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import classnames from "classnames";

import CheckIcon from "../../components/CheckIcon";
import Stack from "../../components/Stack";
import { PageBanner } from "../../components/Banner";

import styles from "./index.module.scss";

const FEATURES = [
  {
    name: "Unlimited instructors",
    support: [true, true, true, true],
  },
  {
    name: "Real-time automated grading",
    support: [true, true, true, true],
  },
  {
    name: "Assessment statistics",
    support: [true, true, true, true],
  },
  {
    name: "Data exporting",
    support: [true, true, true, true],
  },
  {
    name: "API access",
    support: [true, true, true, true],
  },
  {
    name: "Code autograding",
    support: [true, false, true, true],
  },
  {
    name: "Workspaces",
    support: [true, false, true, true],
  },
  {
    name: "LMS integration",
    support: [true, false, false, true],
  },
  {
    name: "Single sign-on (SSO) support",
    support: [false, false, false, true],
  },
  {
    name: "Custom service agreement",
    support: [false, false, false, true],
  },
];

function GetStartedButton({ className }: { className?: string }) {
  return (
    <Link href="/pricing/contact">
      <a className={classnames("btn btn-outline-primary btn-sm", className)}>
        Get started
      </a>
    </Link>
  );
}

function ContactUsButton({ className }: { className?: string }) {
  return (
    <Link href="/pricing/contact">
      <a className={classnames("btn btn-primary btn-sm", className)}>
        Contact us
      </a>
    </Link>
  );
}

export default function Pricing() {
  const [paymentModel, setPaymentModel] = React.useState<"course" | "student">(
    "course"
  );

  const basicPrice = paymentModel === "course" ? "$6" : "$12";
  const premiumPrice = paymentModel === "course" ? "$12" : "$16";

  return (
    <React.Fragment>
      <Head>
        <title>Pricing | PrairieLearn</title>
      </Head>
      <PageBanner title="Pricing" />
      <div className="container my-5">
        <Stack>
          <div className="container">
            <div className="alert alert-primary">
              <p>
                <strong>Always free for instructors!</strong> Explore the full
                PrairieLearn platform as you develop your course
                content&mdash;all for free.
              </p>
              <Link href="/contact">
                <a className="btn btn-primary btn-sm">Request a course</a>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="d-flex flex-row justify-content-center">
              <div className="btn-group">
                <button
                  type="button"
                  className={classnames("btn btn-outline-primary", {
                    active: paymentModel === "course",
                  })}
                  onClick={() => setPaymentModel("course")}
                >
                  <span
                    className={classnames("me-2", {
                      "d-none": paymentModel !== "course",
                    })}
                  >
                    ✓
                  </span>
                  Course pays
                </button>
                <button
                  type="button"
                  className={classnames(
                    "btn btn-outline-primary d-flex flex-row align-items-center",
                    {
                      active: paymentModel === "student",
                    }
                  )}
                  onClick={() => setPaymentModel("student")}
                >
                  <span
                    className={classnames("me-2", {
                      "d-none": paymentModel !== "student",
                    })}
                  >
                    ✓
                  </span>
                  <div>
                    Student pays <br />
                    <small>(coming Fall 2023)</small>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className={classnames(styles.column, "visually-hidden")}>
                    Features
                  </th>
                  <th className={styles.column}>
                    Free
                    <div className="small fw-normal text-muted">
                      Free for 20 students
                    </div>
                    <GetStartedButton className="mt-1" />
                  </th>
                  <th className={styles.column}>
                    Basic
                    <div className="small fw-normal">
                      <strong>{basicPrice}</strong>{" "}
                      <span className="text-muted">/ student / course</span>
                      <GetStartedButton className="mt-1" />
                    </div>
                  </th>
                  <th className={styles.column}>
                    Premium
                    <div className="small fw-normal">
                      <strong>{premiumPrice}</strong>{" "}
                      <span className="text-muted">/ student / course</span>
                      <GetStartedButton className="mt-1" />
                    </div>
                  </th>
                  <th className={styles.column}>
                    Enterprise
                    <div className="small fw-normal text-muted">
                      Custom pricing
                    </div>
                    <ContactUsButton className="mt-1" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature) => (
                  <tr key={feature.name}>
                    <th>{feature.name}</th>
                    {feature.support.map((support, i) => (
                      <td className="align-middle" key={i}>
                        {support ? <CheckIcon /> : <span>-</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th></th>
                  <td>
                    <GetStartedButton />
                  </td>
                  <td>
                    <GetStartedButton />
                  </td>
                  <td>
                    <GetStartedButton />
                  </td>
                  <td>
                    <ContactUsButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Stack>
        <h2 className="mt-4 mb-3">Frequently asked questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How does student-paid pricing work?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Our student-paid model is ideal if you&apos;d like to use
                PrairieLearn without going through your institution&apos;s full
                contract process. Students will be responsible for paying the
                PrairieLearn fee before they are able to access any of your
                course&apos;s content.
              </p>
              <p>
                This pricing model is currently in development, and it is
                expected to be available by Fall 2023. If your course would like
                to be any early adopter of this payment model, please{" "}
                <Link href="/pricing/contact">contact us</Link>.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </React.Fragment>
  );
}

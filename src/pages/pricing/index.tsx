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

interface PricingCardProps {
  title: string;
  price: React.ReactNode;
  cta: React.ReactNode;
}

function PricingCard({ title, price, cta }: PricingCardProps) {
  return (
    <div className="col-md col-sm-6 col-md-3">
      <div className="card shadow-sm text-center h-100">
        <div className="card-body d-flex flex-column">
          <h2 className="card-title h4 mb-3">{title}</h2>
          <div className="flex-grow-1 mb-3">{price}</div>
          {cta}
        </div>
      </div>
    </div>
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
            <div className="d-flex flex-row justify-content-center mb-3">
              <div className="btn-group">
                <button
                  type="button"
                  className={classnames("btn btn-outline-primary", {
                    active: paymentModel === "course",
                  })}
                  onClick={() => setPaymentModel("course")}
                >
                  {paymentModel === "course" ? "✓ " : ""} Course pays
                </button>
                <button
                  type="button"
                  className={classnames("btn btn-outline-primary", {
                    active: paymentModel === "student",
                  })}
                  onClick={() => setPaymentModel("student")}
                >
                  {paymentModel === "student" ? "✓ " : ""} Student pays{" "}
                  <small>(coming Fall 2023)</small>
                </button>
              </div>
            </div>
            <div className="row gy-3">
              <PricingCard
                title="Free"
                price={<span className="text-muted">Free for 20 students</span>}
                cta={
                  <Link href="/pricing/contact">
                    <a className="btn btn-outline-primary">Get started</a>
                  </Link>
                }
              />
              <PricingCard
                title="Basic"
                price={
                  <React.Fragment>
                    <strong>{basicPrice}</strong>{" "}
                    <span className="text-muted">/ student / course</span>
                  </React.Fragment>
                }
                cta={
                  <Link href="/pricing/contact">
                    <a className="btn btn-outline-primary">Get started</a>
                  </Link>
                }
              />
              <PricingCard
                title="Premium"
                price={
                  <React.Fragment>
                    <strong>{premiumPrice}</strong>{" "}
                    <span className="text-muted">/ student / course</span>
                  </React.Fragment>
                }
                cta={
                  <Link href="/pricing/contact">
                    <a className="btn btn-primary">Get started</a>
                  </Link>
                }
              />
              <PricingCard
                title="Enterprise"
                price={<span className="text-muted">Custom pricing</span>}
                cta={
                  <Link href="/pricing/contact">
                    <a className="btn btn-primary">Contact us</a>
                  </Link>
                }
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className={styles.column}>Features</th>
                  <th className={styles.column}>
                    Free
                    <div className="small fw-normal">Free for 20 students</div>
                  </th>
                  <th className={styles.column}>
                    Basic
                    <div className="small fw-normal">
                      <strong>{basicPrice}</strong>{" "}
                      <span className="text-muted">/ student / course</span>
                    </div>
                  </th>
                  <th className={styles.column}>
                    Premium
                    <div className="small fw-normal">
                      <strong>{premiumPrice}</strong>{" "}
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
                    {feature.support.map((support, i) => (
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

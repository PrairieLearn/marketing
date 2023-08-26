import React from "react";
import Head from "next/head";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import classnames from "classnames";
import { motion, useAnimationControls } from "framer-motion";

import CheckIcon from "../../components/CheckIcon";
import Stack from "../../components/Stack";
import { PageBanner } from "../../components/Banner";

import styles from "./index.module.scss";
import { RequestCourseModal } from "../../components/RequestCourseModal";

const FEATURES = [
  {
    name: "Free for instructors",
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
    support: [false, true, true, true],
  },
  {
    name: "Single sign-on (SSO)",
    support: [false, true, true, true],
  },
  {
    name: "Custom service agreement",
    support: [false, false, false, true],
  },
];

const FAQS = [
  {
    title: "Can I use PrairieLearn for free?",
    contents: (
      <p>
        Yes! PrairieLearn is always free for instructors, and the full platform
        is always free for courses with up to 20 students in each term, with no
        limit on the number of terms. If you have more than that,{" "}
        <Link href="/contact">contact us</Link> to arrange a free trial for one
        term.
      </p>
    ),
  },
  {
    title: "How does student-paid pricing work?",
    contents: (
      <React.Fragment>
        <p>
          Our student-paid model is ideal if you&apos;d like to use PrairieLearn
          without going through your institution&apos;s full contract process.
          Students will be responsible for paying the PrairieLearn fee before
          they are able to access any of your course&apos;s content.
        </p>
        <p>
          This pricing model is currently in development, and it is expected to
          be available by Fall 2023. If your course would like to be any early
          adopter of this payment model, please{" "}
          <Link href="/contact">contact us</Link>.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "If my course exceeds 20 students, are the first 20 still free?",
    contents: (
      <p>
        Once your course exceeds 20 students in a term, you will be billed for
        every student. For instance, if there are 30 students enrolled in a
        term, you will be billed for 30 students. If using the student-paid
        model, all 30 students will be required to pay.
      </p>
    ),
  },
  {
    title: "Can I run PrairieLearn myself?",
    contents: (
      <React.Fragment>
        <p>
          Yes! PrairieLearn is open-source, so you can always run it our your
          own servers. See{" "}
          <a href="https://prairielearn.readthedocs.io/en/latest/running-in-production/setup/">
            our documentation
          </a>{" "}
          for more details. Note that we do not provide support for self-hosted
          installations.
        </p>
        <p>
          If you would like to use PrairieLearn but don&apos;t want the
          responsibility of operating, maintaining, and scaling a complex
          distributed system, our hosted offering takes care of security,
          scalability, and updates, as well as enterprise features like SSO
          authentication and LMS integration.
        </p>
      </React.Fragment>
    ),
  },
];

function ContactUsButton({ className }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={classnames("btn btn-primary btn-sm", className)}
    >
      Contact us
    </Link>
  );
}

export default function Pricing() {
  const controls = useAnimationControls();
  const [paymentModel, setPaymentModel] = React.useState<"course" | "student">(
    "course"
  );
  const [showModal, setShowModal] = React.useState(false);

  const basicPrice = paymentModel === "course" ? "$6" : "$10";
  const premiumPrice = paymentModel === "course" ? "$12" : "$16";

  const updatePaymentModel = (model: "course" | "student") => {
    setPaymentModel(model);
    controls.start({ scale: 1.3 }).then(() => controls.start({ scale: 1 }));
  };

  function RequestCourseButton({
    text,
    className,
  }: {
    text: string;
    className?: string;
  }) {
    return (
      <button
        type="button"
        className={classnames("btn btn-outline-primary btn-sm", className)}
        onClick={() => setShowModal(true)}
      >
        {text}
      </button>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <title>Pricing | PrairieLearn</title>
      </Head>
      <PageBanner title="Pricing">
        <div className="alert alert-primary mb-0">
          <p>
            <strong>Free for one term!</strong> PrairieLearn is always free for
            up to 20 students, and courses with more than that can take
            advantage of the full PrairieLearn platform for one term.
          </p>
          <Link href="/contact" className="btn btn-primary btn-sm">
            Request a trial
          </Link>
        </div>
      </PageBanner>
      <div className="container my-5">
        <Stack>
          <div className="container">
            <div className="d-flex flex-row justify-content-center">
              <div className="btn-group">
                <button
                  type="button"
                  className={classnames("btn btn-outline-primary", {
                    active: paymentModel === "course",
                  })}
                  onClick={() => updatePaymentModel("course")}
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
                  onClick={() => updatePaymentModel("student")}
                >
                  <span
                    className={classnames("me-2", {
                      "d-none": paymentModel !== "student",
                    })}
                  >
                    ✓
                  </span>
                  <div>
                    Student pays
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <span
                      className={classnames(styles.column, "visually-hidden")}
                    >
                      Features
                    </span>
                  </th>
                  <th className={styles.column}>
                    Free
                    <div className="small fw-normal text-muted">
                      Free for 20 students
                    </div>
                    <RequestCourseButton text="Get started" />
                  </th>
                  <th className={styles.column}>
                    Basic
                    <div className="small fw-normal">
                      <motion.strong
                        animate={controls}
                        className="d-inline-block"
                      >
                        {basicPrice}
                      </motion.strong>{" "}
                      <span className="text-muted">/ student / course</span>
                      <RequestCourseButton text="Get started" />
                    </div>
                  </th>
                  <th className={styles.column}>
                    Premium
                    <div className="small fw-normal">
                      <motion.strong
                        animate={controls}
                        className="d-inline-block"
                      >
                        {premiumPrice}
                      </motion.strong>{" "}
                      <span className="text-muted">/ student / course</span>
                      <RequestCourseButton text="Get started" />
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
                    <RequestCourseButton text="Get started" />
                  </td>
                  <td>
                    <RequestCourseButton text="Get started" />
                  </td>
                  <td>
                    <RequestCourseButton text="Get started" />
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
        <Accordion alwaysOpen>
          {FAQS.map((faq, i) => (
            <Accordion.Item key={i.toString()} eventKey={i.toString()}>
              <Accordion.Header>{faq.title}</Accordion.Header>
              <Accordion.Body>{faq.contents}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <RequestCourseModal show={showModal} onHide={() => setShowModal(false)} />
    </React.Fragment>
  );
}

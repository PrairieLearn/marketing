import Head from "next/head";
import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { Heading } from "../../components/Heading";
import styles from "./index.module.scss";
import { RequestCourseModal } from "../../components/RequestCourseModal";

import { PageBanner } from "../../components/Banner";

interface HelpCardProps {
  icon: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

const HelpCard: React.FC<HelpCardProps> = ({ icon, title, href, children }) => {
  return (
    <article className="card">
      <div className="card-body">
        <Link href={href}>
          <h2 className="card-title h5 d-flex align-items-center">
            <i className={classnames("bi", icon, "me-2")}></i>
            {title}
          </h2>
        </Link>
        {children}
      </div>
    </article>
  );
};

export default function Support() {
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>Support | PrairieLearn</title>
      </Head>

      <PageBanner
        title="How can we help?"
        subtitle="Find answers, get in touch, or schedule a demo"
      />

      <div id="contact" className="container-fluid py-5">
        <div className="container-md">
          <p className="mb-4">
            For Slack community access and weekly office hours, course staff can
            log in to PrairieLearn and select <strong>Get help</strong>.
          </p>
          <div className={styles.grid}>
            <div className={classnames("card", styles.contact)}>
              <div className="card-body p-4 d-flex flex-column">
                <Heading>Contact us</Heading>
                <p className="card-text">
                  Have a question about pricing, getting started, or using
                  PrairieLearn or PrairieTest? Our team is here to help.
                </p>
                <a
                  href="mailto:support@prairielearn.com"
                  className="btn btn-primary btn-lg d-inline-flex align-items-center align-self-start gap-2 mt-auto"
                >
                  Email support
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
                <a
                  href="mailto:support@prairielearn.com"
                  className="d-block mt-3 align-self-start"
                >
                  support@prairielearn.com
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-body p-4">
                <Heading>Schedule a demo</Heading>
                <p className="card-text">
                  Want to know more about PrairieLearn or PrairieTest?
                </p>
                <Link href="/demo" className="btn btn-warning btn-lg">
                  Schedule a demo
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body p-4">
                <Heading>Request a course</Heading>
                <p className="card-text">
                  Ready to start creating your own course?
                </p>
                <button
                  className="btn btn-warning btn-lg"
                  onClick={() => setShowRequestCourseModal(true)}
                >
                  Start now for free!
                </button>
              </div>
            </div>
            <HelpCard
              title="Get Started"
              icon="bi-rocket-takeoff"
              href="https://docs.prairielearn.com/getting-started/"
            >
              <p className="mb-0">
                Learn the basics of creating course content.
              </p>
            </HelpCard>
            <HelpCard
              title="Example Course"
              icon="bi-mortarboard"
              href="https://us.prairielearn.com/pl/course_instance/4970"
            >
              <p className="mb-0">Browse examples to adapt for your course.</p>
            </HelpCard>
            <HelpCard
              title="Documentation"
              icon="bi-book"
              href="https://docs.prairielearn.com"
            >
              <p className="mb-0">Explore guides and reference material.</p>
            </HelpCard>
            <HelpCard
              title="GitHub Discussions"
              icon="bi-github"
              href="https://github.com/PrairieLearn/PrairieLearn/discussions"
            >
              <p className="mb-0">Ask questions and share ideas.</p>
            </HelpCard>
          </div>
        </div>
      </div>

      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
}

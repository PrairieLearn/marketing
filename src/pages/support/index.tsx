import Head from "next/head";
import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { Heading } from "../../components/Heading";
import { ContactUsForm } from "../../components/ContactUsForm";
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
        subtitle="Discover solutions through our documentation, community, and more"
      />

      <div className={classnames("container-fluid py-5", styles.container)}>
        <div className="container-md">
          <div className={styles.grid}>
            <HelpCard
              title="Get Started"
              icon="bi-rocket-takeoff"
              href="https://prairielearn.readthedocs.io/en/latest/getStarted/"
            >
              <p className="mb-0">
                Simple tutorials to get you ready to create your own content.
              </p>
            </HelpCard>
            <HelpCard
              title="Example Course"
              icon="bi-mortarboard"
              href="https://us.prairielearn.com/pl/course_instance/4970"
            >
              <p className="mb-0">
                Browse through examples that you can use as a template.
              </p>
            </HelpCard>
            <HelpCard
              title="Documentation"
              icon="bi-book"
              href="https://prairielearn.readthedocs.io"
            >
              <p className="mb-0">
                Get more detailed information from our documentation.
              </p>
            </HelpCard>
            <HelpCard title="Slack Community" icon="bi-slack" href="/slack">
              <p className="mb-0">
                Get help in real-time in this community of thousands of users.
              </p>
            </HelpCard>
            <HelpCard
              title="GitHub Discussions"
              icon="bi-github"
              href="https://github.com/PrairieLearn/PrairieLearn/discussions"
            >
              <p className="mb-0">
                Ask questions and get answers in our discussion forum.
              </p>
            </HelpCard>
            <HelpCard
              title="Virtual Meetings"
              icon="bi-camera-video"
              href="/support/virtual-meetings"
            >
              <p className="mb-0">
                Weekly office hours and workshops via Zoom meetings.
              </p>
            </HelpCard>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 mb-5 mt-5 order-1">
              <Heading>Contact Us</Heading>
              <p>Need help with something else? Let us know!</p>
              <ContactUsForm showHeader={false} />
            </div>

            <div className="col-md-6 order-2 my-auto">
              <div className="card mt-5">
                <div className="card-body">
                  <Heading>Schedule a demo</Heading>
                  <p className="card-text">
                    Want a one-on-one or a group demo? Book a time with us!
                  </p>
                  <Link
                    href="https://calendly.com/marianapl"
                    className="btn btn-warning btn-lg me-3"
                  >
                    Schedule a Demo
                  </Link>
                </div>
              </div>
              <div className="card mb-5 mt-5">
                <div className="card-body">
                  <Heading>Request a course</Heading>
                  <p className="card-text">
                    Ready to start creating your own course?
                  </p>
                  <button
                    className="btn btn-warning btn-lg me-3"
                    onClick={() => setShowRequestCourseModal(true)}
                  >
                    Start now for free!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div>
          <Heading>Email</Heading>
          <p>
            If you&apos;re having an emergency or need additional support, reach
            out via email at{" "}
            <a href="mailto:support@prairielearn.com">
              support@prairielearn.com
            </a>
            .
          </p>
        </div>
      </div>
      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
}

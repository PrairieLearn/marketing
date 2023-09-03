import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";
import { Heading } from "../../components/Heading";
import { ContactUsForm } from "../../components/ContactUsForm";
import styles from "./index.module.scss";
import { RequestCourseModal } from "../../components/RequestCourseModal";

import getStarted from "../../lib/images/logos/get-started.png";
import github from "../../lib/images/logos/github-mark.png";
import slack from "../../lib/images/logos/Slack-mark-RGB.png";
import zoom from "../../lib/images/logos/mark_product_ZM-meetings_color-RGB.png";



interface HelpCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  children: React.ReactNode;
}

const HelpCard: React.FC<HelpCardProps> = ({
  image,
  title,
  href,
  children,
}) => {
  return (
    <article className="card mb-3"> 
      <div className="row">
        <div className="card-title mt-3 text-center">
          <Heading>{title}</Heading> 
        </div>
      </div>
      <div className="row g-0">
        <div className="col-md-3 mx-auto">
          <Link href={href}>
          <Image
            src={image}
            alt={title}
            style={{
              objectFit: "contain",
              alignSelf: "center", 
              width: "100%",
              height: "100%",
              aspectRatio: "5 / 3",
            }}
          />
          </Link>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <Link href={href} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              {children}
            </Link>
          </div>
        </div>
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

      <div className={classnames("container-fluid ")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 mb-5 mt-5 order-2">
              <Heading>Contact Us</Heading>
              <p>Need help with something else? Let us know!</p>
              <ContactUsForm showHeader={false} />
            </div>
            <div className="col-md-6 order-1 my-auto">
              <div className="card mb-5 mt-5 w-75 mx-auto">
                <div className="card-body">
                  <Heading>Request a course</Heading> 
                  <p className="card-text">Ready to start creating your own course?</p>
                  <button
                    className="btn btn-warning btn-lg me-3"
                    onClick={() => setShowRequestCourseModal(true)}
                  >
                  Sign up for free!
                  </button>
                </div>
              </div>
              <div className="card mt-5 w-75 mx-auto">
                <div className="card-body">
                  <Heading>Schedule a demo</Heading> 
                  <p className="card-text">
                    Want a one-on-one or a group demo? Book a time with us!
                  </p>
                  <Link
                    href="https://calendly.com/marianapl"
                    className="btn btn-warning btn-lg me-3"
                  >
                  Book a Demo
                  </Link>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-5", styles.container)}>
        <div className="container-md">
          <div className={styles.grid}>
            <HelpCard
              image={getStarted}
              title="Get Started"
              href="https://prairielearn.readthedocs.io/en/latest/getStarted/"
            >
              <p className="mb-0">
                Simple tutorials to get you ready to create your own content.
              </p>
            </HelpCard>
            <HelpCard
              image={getStarted}
              title="Example Course"
              href="https://us.prairielearn.com/pl/course_instance/4970"
            >
              <p className="mb-0">
                Browse through many examples that you can use as template.
              </p>
            </HelpCard>
            <HelpCard
              image={getStarted}
              title="Documentation"
              href="https://prairielearn.readthedocs.io"
            >
              <p className="mb-0">
                Get more detailed information from our documentation.
              </p>
            </HelpCard>
            <HelpCard
              image={slack}
              title="Slack Community"
              href="/slack"
            >
              <p className="mb-0">
                Get help in real-time in this community with over 1,000 users.
              </p>
            </HelpCard>
            <HelpCard
              image={github}
              title="GitHub Discussions"
              href="https://github.com/PrairieLearn/PrairieLearn/discussions"
            >
              <p className="mb-0">
                Best place to ask questions, search for FAQs, and more!
              </p>
            </HelpCard>
            <HelpCard
              image={zoom}
              title="Office Hours"
              href=" "
            >
              <p className="mb-0">
                Weekly office hours via Zoom meetings open to anyone using PrairieLearn. 
              </p>
            </HelpCard>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div>
          <Heading>Email</Heading>

          <p>
            If you&apos;re having an emergency or need additional support,
            reach out via email at{" "}
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

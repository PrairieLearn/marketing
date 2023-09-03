import Head from "next/head";
import React from "react";
import classnames from "classnames";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";
import { ContactUsForm } from "../../components/ContactUsForm";
import styles from "./index.module.scss";
import { RequestCourseModal } from "../../components/RequestCourseModal";

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
                  <button
                    className="btn btn-warning btn-lg me-3"
                  >
                  Book a demo
                  </button>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>


      <div className={classnames("container-fluid py-5", styles.container)}>
        <div className="container-md">
          <div className={styles.grid}>
            <div className="card mb-3">
              <div className="card-body">
                <Heading>Get Started</Heading> 
                <p className="card-text">Ready to start creating your own course?</p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <Heading>Example Course</Heading> 
                <p className="card-text">Ready to start creating your own course?</p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <Heading>Documentation</Heading> 
                <p className="card-text">Ready to start creating your own course?</p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <Heading>Slack Community</Heading> 
                <p className="card-text">If you want to chat with folks in real-time, check our vibrant 
                 {" "}
              <a href="/slack">PrairieLearn community Slack</a> with over 1,000 users.</p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <Heading>GitHub Discussions</Heading> 
                <p className="card-text">              
                <a href="https://github.com/PrairieLearn/PrairieLearn/discussions">
                GitHub Discussions
              </a>{" "} is the best place to ask questions, find answers, and get help. </p>
              </div>
            </div>  
            <div className="card mb-3">
              <div className="card-body">
                <Heading>Office Hours</Heading> 
                <p className="card-text">Our teams holds weekly office hours via Zoom that are open to anyone using PrairieLearn. 
                Email{" "} <a href="mailto:support@prairielearn.com">
                support@prairielearn.com </a>{" "} if you need an invite. 
                </p>
              </div>
            </div>          
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

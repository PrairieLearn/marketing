import React from "react";
import Head from "next/head";
import Image from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import { BannerCTA } from "../../../components/CallToActionBanner";

import cbtfFormatImage from "../../../lib/images/cbtf.jpg";
import reducedDistractionImage from "../../../lib/images/reduced-distraction.png";

import styles from "./index.module.scss";

export default function TestingCenter() {
  return (
    <React.Fragment>
      <Head>
        <title>Testing Centers | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Testing Centers"
        subtitle="Delivering secure exams at scale"
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image
                src={cbtfFormatImage}
                alt="cbtf"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1 pt-4">
              <div className="row">
                <Heading>What is a Testing Center?</Heading>
              </div>
              <p>
                A testing center is a proctored computer lab where students can
                take secure computer-based exams.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-1 pt-4">
            <div className="row">
                <Heading>The most secure exams</Heading>
              </div>
              <p>
                Firewall and managed computers, hired professional proctors, screen filters, cameras
              </p>
            </div>
            <div className="col-md-6 order-2 pt-4">
              <div className="row">
                <Heading>Reliable student verification</Heading>
              </div>
              <p>
              (_who_ is taking the exam, are they taking it _alone_)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-1 pt-4">
              <Image
                src={reducedDistractionImage}
                alt="cbtf"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-2 pt-4">
              <div className="row">
                <Heading>Academic Accommodations</Heading>
              </div>
              <p>
                Students with documented academic accommodations can take the
                exams in the same setting as their classmates, by using special
                seats inside the testing center. Some common requests for
                accommodations that can be arranged at a testing center:
              </p>
              <ul>
                <li>Extended exam time</li>
                <li>Reduced distraction environment</li>
                <li>Text-to-speech software</li>
                <li>
                  Accessible seating for students with wheelchairs or other
                  mobility needs
                </li>
                <li>Special arrangements for bathroom breaks</li>
                <li>Access to disability related technology or equipment</li>
                <li>Special/adjustable furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-1 pt-4">
            <div className="row">
                <Heading>Asynchronous exams</Heading>
              </div>
              <p>
                no more conflict
              </p>
            </div>
            <div className="col-md-6 order-2 pt-4">
              <div className="row">
                <Heading>Easy to schedule</Heading>
              </div>
              <p>
              self-schedule, re-schedule
              </p>
            </div>
          </div>
        </div>
      </div>
      <BannerCTA
        title="Need more information?"
        subtitle="Are you interested in building a testing center? We can help!"
        buttonLabel="Schedule a consultation"
        href="https://calendly.com/marianapl"
      />
    </React.Fragment>
  );
}

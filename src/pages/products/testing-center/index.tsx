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

interface ValuePropCardProps {
  title: string;
  children: React.ReactNode;
}

const ValuePropCard: React.FC<ValuePropCardProps> = ({ title, children }) => {
  return (
    <article className={classnames("card overflow-hidden")}>
      <div className="card-body">
        <h5 className="card-title h5">{title}</h5>
        {children}
      </div>
    </article>
  );
};

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
                <Heading>What is a Testing Center</Heading>
              </div>
              <p>
                A testing center is a proctored computer lab where students can
                take secure computer-based exams.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-4")}>
        <div className="container-md">
          <div className="row">
            <h4 className={classnames("py-3 ", styles.color, styles.center)}>
              Benefits from running exams at a Testing Center
            </h4>
          </div>
          <div className={styles.grid}>
            <ValuePropCard title="The most secure exams">
              Maximize test integrity with managed computers, lab firewall, and
              vigilant proctoring. Students access only approved resources,
              while cheating risks are minimized through computer screens, video
              cameras and professional oversight.
            </ValuePropCard>
            <ValuePropCard title="Reliable check-in process">
              Enhance security measures by verifying students&apos; identities
              at the lab entrance through their student ID cards. In addition,
              all personal belongings, including phones, are securely stored
              before entering the testing environment.
            </ValuePropCard>
            <ValuePropCard title="Flexible and efficient scheduling">
              Offer exams asynchronously over 2-3 days, optimizing space
              utilization in smaller computer labs for larger classes. Eliminate
              the need for instructors to manage make-up or conflict exams,
              streamlining the testing process for both students and faculty.
            </ValuePropCard>
            <ValuePropCard title="Student-centric exam scheduling">
              Empower students with the flexibility to schedule exams at their
              preferred times within the exam period. Enable easy reservation
              modifications and cancellations up to the selected exam time,
              providing convenience and autonomy to students.
            </ValuePropCard>
            <ValuePropCard title="Seamless Exam Overrides">
              Empower instructors with the capability to effortlessly grant
              overrides for students facing unexpected circumstances, such as
              illness or unavoidable absences during the exam period.
            </ValuePropCard>
            <ValuePropCard title="Authentic testing">
              Create an authentic testing environment by providing students with
              access to computers equipped with compilers, debuggers, and
              graphical software, ensuring a comprehensive assessment of their
              skills and knowledge.
            </ValuePropCard>
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

      <BannerCTA
        title="Need more information?"
        subtitle="Are you interested in building a testing center? We can help!"
        buttonLabel="Schedule a consultation"
        href="https://calendly.com/marianapl"
      />
    </React.Fragment>
  );
}

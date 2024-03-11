import React from "react";
import Head from "next/head";
import Image from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import { BannerCTA } from "../../../components/CallToActionBanner";
import { LinkButton } from "../../../components/LinkButton";

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
        subtitle="Delivering secure computer-based exams at scale"
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 pt-4">
              <div className="row justify-content-center">
                <Heading className="text-center">
                  What is a testing center?
                </Heading>
              </div>
              <div className="row justify-content-center">
                <p className={classnames("text-center", styles.larger_font)}>
                  A testing center is a dedicated room equipped with computers
                  and supervised by proctors, where students can take secure
                  computer-based exams.
                </p>
              </div>
              <LinkButton
                label="Schedule a consultation"
                href="https://calendly.com/marianapl"
              />
            </div>
            <div className="col-md-6 order-md-2 pt-4 text-center">
              <Image
                src={cbtfFormatImage}
                alt="testing center"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-4")}>
        <div className="container-md">
          <div className="row">
            <h4 className={classnames("py-3 ", styles.color, styles.center)}>
              Benefits of a testing center
            </h4>
          </div>
          <div className={styles.grid}>
            <ValuePropCard title="Ultimate exam security">
              Maximize test integrity with managed computers, lab firewall, and
              vigilant proctoring. Students access only approved resources,
              while cheating risks are minimized through computer screens, video
              cameras, and professional oversight.
            </ValuePropCard>
            <ValuePropCard title="Restriction to unauthorized AI services">
              Ensure exam integrity by restricting access to AI services and
              question-answering websites (such as chatGPT, Copilot, Chegg, and
              CourseHero), fostering academic honesty and fair assessment.
            </ValuePropCard>
            <ValuePropCard title="Professional proctoring staff">
              Ensure a fair and equitable experience for all students by using
              professional proctors who are trained to uphold the testing center
              policies and prevent violations. In addition, this relieves
              instructors from proctoring duties, freeing course staff time for
              other essential activities.
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
              Empower students, especially those balancing family and work
              obligations, with the flexibility to schedule exams at their
              preferred times within the exam period. Enable easy reservation
              modifications and cancellations up to the selected exam time,
              providing convenience and autonomy.
            </ValuePropCard>
            <ValuePropCard title="Seamless exam overrides">
              Empower instructors to effortlessly grant overrides for students
              facing unexpected circumstances, such as illness or unavoidable
              absences during the exam period.
            </ValuePropCard>
            <ValuePropCard title="Authentic testing">
              Create an authentic testing environment by providing students with
              access to compilers, debuggers, and graphical software, ensuring a
              comprehensive assessment of their skills and knowledge.
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
                alt="seat in reduced distraction environment"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-2 pt-4">
              <div className="row">
                <Heading>Academic accommodations</Heading>
              </div>
              <p>
                Students with documented academic accommodations can take the
                exams in the same setting as their classmates by using special
                seats inside the testing center. A variety of common requests
                can be accommodated:
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
        subtitle="If you're interested in building a testing center, we can help!"
        buttonLabel="Schedule a consultation"
        href="https://calendly.com/marianapl"
      />
    </React.Fragment>
  );
}

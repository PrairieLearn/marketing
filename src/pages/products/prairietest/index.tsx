import React from "react";
import Head from "next/head";
import Image from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import { BannerCTA } from "../../../components/CallToActionBanner";

import diagramImage from "../../../lib/images/exam-management.png";
import schedulerImage from "../../../lib/images/pt-reservation.png";
import onlineFormatImage from "../../../lib/images/student-zoom.jpg";
import cbtfFormatImage from "../../../lib/images/cbtf.jpg";
import byodFormatImage from "../../../lib/images/byodinclass.png";

import styles from "./index.module.scss";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children }) => {
  return (
    <div>
      <div className="h3">{icon}</div>
      <h5 className="card-title h5">{title}</h5>
      {children}
    </div>
  );
};

export default function PrairieTest() {
  return (
    <React.Fragment>
      <Head>
        <title>PrairieTest | PrairieLearn</title>
      </Head>
      <PageBanner
        title="PrairieTest"
        subtitle="Planning and delivering exams at scale"
      />

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className="row">
            <Heading>Powerful exam management system</Heading>
          </div>
          <div className="row">
            <Image
              src={diagramImage}
              alt="diagram exam management process"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className="row">
            <h2 className={classnames("mb-3 ", styles.color)}>
              All exam management done in one place!
            </h2>
          </div>
          <div className={styles.grid}>
            <FeatureCard
              icon={<i className="bi bi-person-vcard"></i>}
              title="Fast check-in process"
            >
              Supports card scanners providing fast student verification that
              enables exams access.
            </FeatureCard>
            <FeatureCard
              icon={<i className="bi bi-universal-access-circle"></i>}
              title="Accessible testing"
            >
              Ability to set up various exams accommodations, such as extended
              exam time.
            </FeatureCard>
            <FeatureCard
              icon={<i className="bi bi-clock-history"></i>}
              title="Easy rescheduling"
            >
              Students are able to change their exam selection on their own
              until the exam date.
            </FeatureCard>
            <FeatureCard
              icon={<i className="bi bi-pencil-square"></i>}
              title="Per-student overrides"
            >
              Instructors can change exam settings for individual students.
            </FeatureCard>
            <FeatureCard
              icon={<i className="bi bi-people"></i>}
              title="Proctoring assignments"
            >
              Instructors can assign proctors for the different sections of an
              exam, or different exams.
            </FeatureCard>
            <FeatureCard
              icon={<i className="bi bi-calendar2-event"></i>}
              title="Unified scheduling view"
            >
              Students, proctors, and instructors can all see when and where
              their exams are scheduled.
            </FeatureCard>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className="row">
            <Heading>Student self-registration</Heading>
            <p>
              When instructors are running asynchronous exams, students are able
              to select the time and location of their choice. They also have
              the ability to change or cancel their reservation before the
              scheduled exam, without having to contact the instructor.
            </p>
          </div>
          <div className="row">
            <Image
              src={schedulerImage}
              alt="student scheduler UI"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className="row pb-4">
            <Heading>Exams delivered in different formats</Heading>
            <p>
              PrairieTest can be used to deliver exams in multiple formats or in
              a combination of any of them.
            </p>
          </div>
          <div className="row pb-4">
            <div className="col-md-6 order-2">
              <Image
                src={byodFormatImage}
                alt="students taking in-class exam"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1">
              <h3 className={styles.color}>Exams in the classroom</h3>
              <p>
                Students complete exams using their own device from a classroom,
                or using institutional machines in a computer lab. In this
                setup, course staff usually serve as proctors.
              </p>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-md-6 order-2">
              <Image
                src={onlineFormatImage}
                alt="student taking online exam"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1">
              <h3 className={styles.color}>Exams online</h3>
              <p>
                Students complete exams using their own device from a remote
                location. In this setting, instructors can create virtual
                meetings where students get their identification verified, and
                access to the exam is provided via PrairieTest.
              </p>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-md-6 order-2">
              <Image
                src={cbtfFormatImage}
                alt="testing center room"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1">
              <h3 className={styles.color}>Exams in testing centers</h3>
              <p>
                Students take their exams at a dedicated computer lab, which
                runs asynchronous exams for many courses using trained proctors.
                The testing center firewall blocks all access to the internet,
                with the exception of allowed exam content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BannerCTA
        title="Request a demo!"
        subtitle="Want a one-on-one or a group demo? Book a time with us!"
        buttonLabel="Schedule a demo"
        href="https://calendly.com/marianapl"
      />
    </React.Fragment>
  );
}

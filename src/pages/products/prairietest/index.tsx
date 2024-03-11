import React from "react";
import Head from "next/head";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import { BannerCTA } from "../../../components/CallToActionBanner";

import diagramImage from "../../../lib/images/exam-management.png";
import scannerImage from "../../../lib/images/swipe.png";
import accommodationsImage from "../../../lib/images/pt-accommodations.png";
import unifiedViewImage from "../../../lib/images/unified-view.png";
import rescheduleImage from "../../../lib/images/reschedule.png";
import proctorImage from "../../../lib/images/assign-proctor.png";
import schedulerImage from "../../../lib/images/pt-reservation.png";
import overridesImage from "../../../lib/images/overrides.png";
import onlineFormatImage from "../../../lib/images/zoom-proctored.png";
import cbtfFormatImage from "../../../lib/images/cbtf.jpg";
import byodFormatImage from "../../../lib/images/byodinclass.png";

import styles from "./index.module.scss";

interface FeatureCardProps {
  image: ImageProps["src"];
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  children,
}) => {
  return (
    <article className={classnames("card overflow-hidden", styles.card)}>
      <Image
        src={image}
        alt={title}
        style={{
          objectFit: "contain",
          width: "30%",
          height: "30%",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "column",
        }}
      />
      <div className="card-body">
        <h5 className="card-title h5">{title}</h5>
        {children}
      </div>
    </article>
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
        subtitle="Planning and delivering testing at scale"
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row">
            <Heading>Powerful Exam Management System</Heading>
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

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <div className="row">
            <h4 className={classnames("py-3 ", styles.color, styles.center)}>
              All exam management done in one place!
            </h4>
          </div>
          <div className={styles.grid}>
            <FeatureCard image={scannerImage} title="Fast check-in process">
              Supports card scanners providing fast student verification that
              enables exams access
            </FeatureCard>
            <FeatureCard image={accommodationsImage} title="Accessible testing">
              Ability to setup various exams accommodations, such as extended
              exam time
            </FeatureCard>
            <FeatureCard image={rescheduleImage} title="Easy rescheduling">
              Students are able to change their exam selection on their own
              until the exam date.
            </FeatureCard>
            <FeatureCard image={overridesImage} title="Allows overrides">
              Instructors can change exam settings for individual students
            </FeatureCard>
            <FeatureCard image={proctorImage} title="Proctoring Assignments">
              Instructors can assign proctors for the different sections of an
              exam, or different exams
            </FeatureCard>
            <FeatureCard
              image={unifiedViewImage}
              title="Unified scheduling view"
            >
              Students, proctors, and instructors can all see when and where
              their exams are scheduled
            </FeatureCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row">
            <Heading>Student Self-Registration</Heading>
            <p>
              {" "}
              When instructors are running asynchronous exams, students are able
              to select the time and location of their choice. They also have
              the ability to change or cancel their reservation before the
              scheduled exam, without having to contact the instructor.{" "}
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

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <div className="row">
            <Heading>Exams delivered in different formats</Heading>
            <p>
              {" "}
              PrairieTest can be used to deliver exams in the classroom, online
              with proctoring via virtual meetings, in testing centers. Proctors
              will use PrairieLearn to control students&apos; access to exams.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image
                src={byodFormatImage}
                alt="student taking in-class exam"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1">
              <h4 className={classnames("py-3 ", styles.color)}>
                Exams in the classroom
              </h4>
              <p>
                Students complete exams using their own device from a classroom,
                or using institutional machines in a computer lab. In this
                setup, course staff usually serve as proctors.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
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
              <h4 className={classnames("py-3 ", styles.color)}>
                Exams online
              </h4>
              <p>
                Students complete exams using their own device from a remote
                location. In this setting, instructors can create virtual
                meetings where students get their identification verified, and
                access to exam is provided via PrairieTest.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image
                src={cbtfFormatImage}
                alt="cbtf room"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-md-6 order-1">
              <h4 className={classnames("py-3 ", styles.color)}>
                Exams in testing centers
              </h4>
              <p>
                Students take their exams at a dedicated computer lab, which
                runs asynchronous exams for many courses using trained proctors.
                The testing center firewall blocks all access to the internet,
                with the exception from allowed exam content.
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

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

// import { ContactUsForm } from "../../components/ContactUsForm";
import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
// import { DemoCourseCTA } from "../../components/DemoCourse";

import diagramImage from "../../../lib/images/exam-management.png";
import scannerImage from "../../../lib/images/swipe.png";
import accommodationsImage from "../../../lib/images/pt-accommodations.png";
import fingerprintImage from "../../../lib/images/fingerprint.png";
import rescheduleImage from "../../../lib/images/reschedule.png";
import assignproctorImage from "../../../lib/images/assign-proctor.png";
import overridesImage from "../../../lib/images/overrides.png";

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
    <article className="card overflow-hidden">
      <Image
        src={image}
        alt={title}
        style={{
          objectFit: "contain",
          width: "30%",
          height: "30%",
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
            <h4 className={classnames("py-3 ", styles.subheading)}>
            All exam management processes done in one-place!
            </h4>
          </div>
          <div className={styles.grid}>
            <FeatureCard
              image={scannerImage}
              title="Fast check-in process"
            >
              Supports card scanners providing fast student verification that enables exams access
            </FeatureCard>
            <FeatureCard
              image={accommodationsImage}
              title="Accessible testing"
            >
              Ability to setup various exams accommodations, such as extended exam time
            </FeatureCard>
            <FeatureCard
              image={rescheduleImage}
              title="Easy Rescheduling"
            >
              bla
            </FeatureCard>
            <FeatureCard
              image={overridesImage}
              title="Allows Overrides"
            >
              bla
            </FeatureCard>
            <FeatureCard
              image={assignproctorImage}
              title="Proctoring Assignments"
            >
              bla
            </FeatureCard>
            <FeatureCard
              image={fingerprintImage}
              title="Fingerprinting for Security"
            >
              bla
            </FeatureCard>
          </div>
        </div>
      </div>


      {/* <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-12">
              <Heading>Feature List</Heading>
             
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col col-md-5">
            <ContactUsForm showHeader={false} />
          </div>
        </div>
      </div> */}
{/* 
      <DemoCourseCTA
        title="View demo course!"
        subtitle="Too busy to schedule a demo? You can test the demo course on your own, before requesting your course space."
        buttonLabel="Demo course"
      /> */}
    </React.Fragment>
  );
}

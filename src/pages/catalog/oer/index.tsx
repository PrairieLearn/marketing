import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import { RequestCourseModal } from "../../../components/RequestCourseModal";

import styles from "./index.module.scss";
import eorstatics from "../../../lib/images/tam211.png";
import eordynamics from "../../../lib/images/tam212.png";
import eorsolids from "../../../lib/images/tam251.png";
import eornumerical from "../../../lib/images/cs357.png";
import eorphysics1 from "../../../lib/images/EORphysics1.png";
import eorphysics2 from "../../../lib/images/EORphysics2.png";
import eorpython from "../../../lib/images/EORpython.png";
import eorthermo from "../../../lib/images/EORthermo.png";
import sigcse2023 from "../../../lib/images/sigcse2023.png";
import cs233Image from "../../../lib/images/cs-233.png";
import yorkjonatanImage from "../../../lib/images/york-jonatan.png";
import ece6353fraida from "../../../lib/images/ece6353fraida.png";

interface SharedQuestionCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  institution?: string;
  ownerName?: string;
  ownerEmail?: string;
}

const SharedQuestionCard: React.FC<SharedQuestionCardProps> = ({
  image,
  title,
  href,
  institution,
  ownerName,
  ownerEmail,
}) => {
  return (
    <article className="card border-secondary overflow-hidden">
      <Link href={href} className="position-relative">
        <Image
          src={image}
          alt={title}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            aspectRatio: "5 / 3",
          }}
        />
      </Link>
      <div className="card-body">
        <Link href={href}>
          <h3 className="card-title h5">{title}</h3>
        </Link>
        {ownerName && (
          <p className="mb-1">
            <strong>Shared by:</strong> {ownerName}{" "}
            {ownerEmail && <a href={`mailto:${ownerEmail}`}>{ownerEmail}</a>}
          </p>
        )}
        {institution && (
          <p className="mb-1">
            <strong>Institution: </strong> {institution}
          </p>
        )}
      </div>
    </article>
  );
};

export default function Courses() {
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>OER | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Open Educational Resources (OER)"
        subtitle="A catalog of questions to help you get started with PrairieLearn"
      />

      <div className={classnames("container-fluid my-3")}>
        <div className="container-md">
          <div className="alert alert-primary mb-0">
            <p>
              You&apos;ll be asked to sign in to PrairieLearn to view our
              question catalog. If you want to use any of these questions, you
              will first need to request your PrairieLearn course space, which
              is always free for instructors.
            </p>
            <div className="col-md-12 text-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setShowRequestCourseModal(true)}
              >
                Request a course
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <Heading>Publicly Shared Questions</Heading>
          <p>
            This question catalog has been publicly shared by instructors from
            various universities. If you like any of these questions, you can
            use them directly in your course, without any need to copy
            questions. Read these <Link href="https://prairielearn.readthedocs.io/en/latest/questionSharing/">instructions</Link> to see how you can
            use publicly shared questions in your course. Some of the questions
            can be copied to your course, so you can make changes if you want!
          </p>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <div className={styles.grid}>
            <SharedQuestionCard
              image={eorphysics1}
              title="Physics: Mechanics"
              href="https://us.prairielearn.com/pl/course_instance/136441/assessment/2350772"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eorphysics2}
              title="Physics: E&amp;M"
              href="https://us.prairielearn.com/pl/course_instance/136442/assessment/2350773"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eorstatics}
              title="Statics"
              href="https://us.prairielearn.com/pl/course_instance/136474/assessment/2350805"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eordynamics}
              title="Dynamics"
              href="https://us.prairielearn.com/pl/course_instance/136475/assessment/2350806"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eorsolids}
              title="Solid Mechanics"
              href="https://us.prairielearn.com/pl/course_instance/136415/assessment/2350745"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eornumerical}
              title="Numerical Methods"
              href="https://us.prairielearn.com/pl/course_instance/136413/assessment/2350744"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eorthermo}
              title="Thermodynamics"
              href="https://us.prairielearn.com/pl/course_instance/136573/assessment/2351036"
              institution="University of Illinois, Urbana-Champaign"
              ownerName="Shelby Hutchens"
              ownerEmail="hutchs@illinois.edu"
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={eorpython}
              title="Introduction to Python"
              href="https://us.prairielearn.com/pl/course_instance/136606/assessment/2351069"
              institution=""
              ownerName="PrairieLearn, Inc."
              ownerEmail=""
            ></SharedQuestionCard>

            <SharedQuestionCard
              image={sigcse2023}
              title="SIGCSE 2023 - Workhop"
              href="https://us.prairielearn.com/pl/public/course/1305/questions"
              institution="UBC, York U, NYU, UIUC, U Michigan"
              ownerName="Firas Moosvi"
              ownerEmail="firas.moosvi@ubc.ca"
            ></SharedQuestionCard>
            <SharedQuestionCard
              image={yorkjonatanImage}
              title="Miscellaneous Computer Systems Topics"
              href="https://ca.prairielearn.com/pl/course_instance/2284"
              institution="York University"
              ownerName="Jonatan Schroeder"
              ownerEmail="jonatan@yorku.ca"
            ></SharedQuestionCard>
            <SharedQuestionCard
              image={ece6353fraida}
              title="Internet Architecture and Protocols"
              href="https://us.prairielearn.com/pl/course_instance/129160"
              institution="New York University"
              ownerName="Fraida Fund"
              ownerEmail="ffund@nyu.edu"
            ></SharedQuestionCard>
            <SharedQuestionCard
              image={cs233Image}
              title="Computer Architecture"
              href="https://us.prairielearn.com/pl/course_instance/128979"
              institution="University of Illinois Urbana-Champaign"
              ownerName="Geoffrey Herman"
              ownerEmail="glherman@illinois.edu"
            ></SharedQuestionCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <h2 className="h4">License</h2>
          <p>
            All content here is made made available under an open license. See
            each question for license details.
          </p>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <h2 className="h4">Contribute to this page</h2>
          <p>
            If you want to share your PrairieLearn content in this page, please
            contact us at{" "}
            <a href="mailto:hello@prairielearn.com">hello@prairielearn.com</a>.
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

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

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
import ece6353fraida from "../../../lib/images/ece6353fraida.png";

interface SharedQuestionCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  ownerName?: string;
  ownerEmail?: string;
  github?: string;
}

const SharedQuestionCard: React.FC<SharedQuestionCardProps> = ({
  image,
  title,
  href,
  ownerName,
  ownerEmail,
  github,
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
        {github && (
          <p className="mb-1">
            <Link href={github}>View source on GitHub</Link>
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
        <title>OER Questions | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Open Educational Resources (OER): Questions"
        subtitle="A catalog of questions to help you get started with PrairieLearn"
      />

      <div className="container-fluid my-3">
        <div className="container-md">
          <div className="alert alert-secondary mb-0">
            <p>
              You&apos;ll be asked to sign in to PrairieLearn to view our
              question catalog. If you want to use any of these questions, you
              will first need to request your PrairieLearn course space, which
              is always free for instructors.
            </p>
            <div className="text-center">
              <button
                className="btn btn-warning btn-lg"
                onClick={() => setShowRequestCourseModal(true)}
              >
                Request a course
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <Heading>Publicly Shared Questions</Heading>
          <div className="row">
            <p>
              This catalog contains questions that have been publicly shared by
              instructors from various universities. If you like any of these
              questions, you can use them directly in your course, without any
              need to copy questions. Read these{" "}
              <Link href="https://prairielearn.readthedocs.io/en/latest/contentSharing/#sharing-questions">
                instructions
              </Link>{" "}
              to see how you can use publicly shared questions in your course.
              Some of the questions can be copied to your course, so you can
              make changes if you want!
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className={styles.grid}>
            <SharedQuestionCard
              image={eorphysics1}
              title="Physics: Mechanics"
              href="https://us.prairielearn.com/pl/public/course/2923/questions"
              github="https://github.com/PrairieLearn/pl-oer-physics1"
            />

            <SharedQuestionCard
              image={eorphysics2}
              title="Physics: E&amp;M"
              href="https://us.prairielearn.com/pl/public/course/2922/questions"
              github="https://github.com/PrairieLearn/pl-oer-physics2"
            />

            <SharedQuestionCard
              image={eorstatics}
              title="Statics"
              href="https://us.prairielearn.com/pl/public/course/2924/questions"
              github="https://github.com/PrairieLearn/pl-oer-statics"
            />

            <SharedQuestionCard
              image={eordynamics}
              title="Dynamics"
              href="https://us.prairielearn.com/pl/public/course/2955/questions"
              github="https://github.com/PrairieLearn/pl-oer-dynamics"
            />

            <SharedQuestionCard
              image={eorsolids}
              title="Solid Mechanics"
              href="https://us.prairielearn.com/pl/public/course/2925/questions"
              github="https://github.com/PrairieLearn/pl-oer-solidMechanics"
            />

            <SharedQuestionCard
              image={eornumerical}
              title="Numerical Methods"
              href="https://us.prairielearn.com/pl/public/course/2926/questions"
              github="https://github.com/PrairieLearn/pl-oer-numericalMethods"
            />

            <SharedQuestionCard
              image={eorthermo}
              title="Thermodynamics"
              href="https://us.prairielearn.com/pl/public/course/2988/questions"
              ownerName="Shelby Hutchens"
              ownerEmail="hutchs@illinois.edu"
              github="https://github.com/PrairieLearn/pl-oer-thermodynamics"
            />

            <SharedQuestionCard
              image={eorpython}
              title="Introduction to Python"
              href="https://us.prairielearn.com/pl/public/course/2889/questions"
              github="https://github.com/PrairieLearn/pl-oer-python"
            />

            <SharedQuestionCard
              image={cs233Image}
              title="Miscellaneous CS Topics"
              href="https://us.prairielearn.com/pl/public/course/6717/questions"
              github="https://github.com/PrairieLearn/pl-oer-csmix"
            />

            <SharedQuestionCard
              image={sigcse2023}
              title="SIGCSE 2023 - Workshop"
              href="https://us.prairielearn.com/pl/public/course/1305/questions"
              github="https://github.com/PrairieLearn/pl-prairielearn101"
            />

            <SharedQuestionCard
              image={ece6353fraida}
              title="Internet Architecture and Protocols"
              href="https://us.prairielearn.com/pl/public/course/358/questions"
              ownerName="Fraida Fund"
              ownerEmail="ffund@nyu.edu"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <h2 className="h4">License</h2>
          <p>All content here is made made available under an open license.</p>
        </div>
      </div>

      <div className="container-fluid my-5">
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

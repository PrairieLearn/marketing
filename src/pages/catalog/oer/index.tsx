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
import oercalc1 from "../../../lib/images/oer-calc1.png";
import oerLA from "../../../lib/images/oer-LA.png";

interface SharedQuestionCardProps {
  image: ImageProps["src"];
  title: string;
  questionHref?: string;
  courseInstanceHref?: string;
  ownerName?: string;
  ownerEmail?: string;
  github?: string;
}

const SharedQuestionCard: React.FC<SharedQuestionCardProps> = ({
  image,
  title,
  questionHref,
  courseInstanceHref,
  ownerName,
  ownerEmail,
  github,
}) => {
  return (
    <article className="card border-secondary overflow-hidden">
      <div className="position-relative">
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
      </div>
      <div className="card-body">
        <h3 className="card-title h5">{title}</h3>
        {courseInstanceHref && (
          <p className="mb-1">
            <Link href={courseInstanceHref}>Shared course instance</Link>
          </p>
        )}
        {questionHref && (
          <p className="mb-1">
            <Link href={questionHref}>Shared question bank</Link>
          </p>
        )}
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
        <title>OER | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Open Educational Resources (OER)"
        subtitle="A catalog of publicly shared questions and course content to help you get started with PrairieLearn"
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
          <Heading>Publicly Shared Content</Heading>
          <div className="row">
            <p>
              This section contains questions and course instances that have
              been publicly shared by instructors from various universities. A{" "}
              <strong>shared question bank</strong> lets you use questions
              directly in your course without copying, or copy individual
              questions if you want to make changes. A{" "}
              <strong>shared course instance</strong> lets you copy the entire
              course structure — including assessments and questions — into your
              own course. Read these{" "}
              <Link href="https://docs.prairielearn.com/contentSharing/">
                instructions
              </Link>{" "}
              to learn more about how content sharing works.
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
              questionHref="https://us.prairielearn.com/pl/public/course/2923/questions"
              courseInstanceHref="https://us.prairielearn.com/pl/public/course_instance/219205/assessments"
              github="https://github.com/PrairieLearn/pl-oer-physics1"
            />

            <SharedQuestionCard
              image={eorphysics2}
              title="Physics: E&amp;M"
              questionHref="https://us.prairielearn.com/pl/public/course/2922/questions"
              github="https://github.com/PrairieLearn/pl-oer-physics2"
            />

            <SharedQuestionCard
              image={eorstatics}
              title="Statics"
              questionHref="https://us.prairielearn.com/pl/public/course/92/questions"
              courseInstanceHref="https://us.prairielearn.com/pl/public/course_instance/183434/assessments"
              // OER repo:
              // "https://us.prairielearn.com/pl/public/course/2924/questions"
              // github="https://github.com/PrairieLearn/pl-oer-statics"
            />

            <SharedQuestionCard
              image={eordynamics}
              title="Dynamics"
              questionHref= "https://us.prairielearn.com/pl/public/course/1/questions"
              courseInstanceHref="https://us.prairielearn.com/pl/public/course_instance/185380/assessments"
              // "https://us.prairielearn.com/pl/public/course/2955/questions"
              // github="https://github.com/PrairieLearn/pl-oer-dynamics"
            />

            <SharedQuestionCard
              image={eorsolids}
              title="Solid Mechanics"
              questionHref="https://us.prairielearn.com/pl/public/course/93/questions"
              courseInstanceHref="https://us.prairielearn.com/pl/public/course_instance/184192/assessments"
              // "https://us.prairielearn.com/pl/public/course/2925/questions"
              // github="https://github.com/PrairieLearn/pl-oer-solidMechanics"
            />

            <SharedQuestionCard
              image={eornumerical}
              title="Numerical Methods"
              questionHref="https://us.prairielearn.com/pl/public/course/2926/questions"
              github="https://github.com/PrairieLearn/pl-oer-numericalMethods"
            />

            <SharedQuestionCard
              image={eorthermo}
              title="Thermodynamics"
              questionHref="https://us.prairielearn.com/pl/public/course/2988/questions"
              ownerName="Shelby Hutchens"
              ownerEmail="hutchs@illinois.edu"
              github="https://github.com/PrairieLearn/pl-oer-thermodynamics"
            />

            <SharedQuestionCard
              image={eorpython}
              title="Introduction to Python"
              questionHref="https://us.prairielearn.com/pl/public/course/2889/questions"
              github="https://github.com/PrairieLearn/pl-oer-python"
            />

            <SharedQuestionCard
              image={cs233Image}
              title="Miscellaneous CS Topics"
              questionHref="https://us.prairielearn.com/pl/public/course/6717/questions"
              github="https://github.com/PrairieLearn/pl-oer-csmix"
            />

            <SharedQuestionCard
              image={sigcse2023}
              title="SIGCSE 2023 - Workshop"
              questionHref="https://us.prairielearn.com/pl/public/course/1305/questions"
              github="https://github.com/PrairieLearn/pl-prairielearn101"
            />

            <SharedQuestionCard
              image={ece6353fraida}
              title="Internet Architecture and Protocols"
              questionHref="https://us.prairielearn.com/pl/public/course/358/questions"
              ownerName="Fraida Fund"
              ownerEmail="ffund@nyu.edu"
            />

            <SharedQuestionCard
              image={oercalc1}
              title="Calculus I"
              questionHref="https://us.prairielearn.com/pl/public/course/7608/questions"
              courseInstanceHref="https://us.prairielearn.com/pl/public/course_instance/201287/assessments"
            />

            <SharedQuestionCard
              image={oerLA}
              title="Linear Algebra"
              questionHref="https://us.prairielearn.com/pl/public/course/16782/questions"
              courseInstanceHref="https://us.prairielearn.com/pl/public/course_instance/198184/assessments"
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

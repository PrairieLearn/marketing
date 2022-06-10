import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ImageProps } from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import Image from "../../../components/Image";

import styles from "./index.module.scss";
import cs233Image from "../../../lib/images/cs-233.png";

interface CourseCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  institution: string;
  rubric: string;
  ownerName: string;
  ownerEmail: string;
  children: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  href,
  institution,
  rubric,
  ownerName,
  ownerEmail,
  children,
}) => {
  return (
    <article className="card">
      <Link href={href}>
        <a className="position-relative" style={{ aspectRatio: "4 / 3" }}>
          <Image src={image} layout="fill" objectFit="contain" alt={title} />
        </a>
      </Link>
      <div className="card-body">
        <Link href={href}>
          <a>
            <h3 className="card-title h5">{title}</h3>
          </a>
        </Link>
        <p className="mb-1">
          <strong>Institution:</strong> {institution}
        </p>
        <p className="mb-1">
          <strong>Rubric: </strong> {rubric}
        </p>
        <p className="mb-1">
          <strong>Instructor:</strong> {ownerName} (
          <a href={`mailto:${ownerEmail}`}>{ownerEmail}</a>)
        </p>
        {children}
      </div>
    </article>
  );
};

export default function Courses() {
  return (
    <React.Fragment>
      <Head>
        <title>Courses | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Courses"
        subtitle="Collections of assessments and questions"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <Heading>Courses</Heading>
          <p>
            Courses are home to all the{" "}
            <Link href="/gallery/assessments">assessments</Link> and{" "}
            <Link href="/gallery/questions">questions</Link> you have created.
          </p>

          <div className={styles.grid}>
            <CourseCard
              image={cs233Image}
              title="Computer Architecture"
              href="https://www.prairielearn.org/pl/course_instance/128979"
              institution="University of Illinois Urbana-Champaign"
              rubric="CS 233"
              ownerName="Geoffrey Herman"
              ownerEmail="glherman@illinois.edu"
            >
              <p className="mb-0">
                This course teaches the fundamentals of computer architecture,
                including digital logic design, machine-level programming, and
                performance models of modern computer hardware. Its PrairieLearn
                questions include a variety of novel problem types, including
                randomly-generated state machines, ALUs, truth tables, and more.
              </p>
            </CourseCard>

            <CourseCard
              image={cs233Image}
              title="Computer Architecture"
              href="https://www.prairielearn.org/pl/course_instance/128979"
              institution="University of Illinois Urbana-Champaign"
              rubric="CS 233"
              ownerName="Geoffrey Herman"
              ownerEmail="glherman@illinois.edu"
            >
              <p className="mb-0">
                This is some different text to test card sizes.
              </p>
            </CourseCard>

            <CourseCard
              image={cs233Image}
              title="Computer Architecture"
              href="https://www.prairielearn.org/pl/course_instance/128979"
              institution="University of Illinois Urbana-Champaign"
              rubric="CS 233"
              ownerName="Geoffrey Herman"
              ownerEmail="glherman@illinois.edu"
            >
              <p className="mb-0">
                This course teaches the fundamentals of computer architecture,
                including digital logic design, machine-level programming, and
                performance models of modern computer hardware. Its PrairieLearn
                questions include a variety of novel problem types, including
                randomly-generated state machines, ALUs, truth tables, and more.
              </p>
            </CourseCard>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

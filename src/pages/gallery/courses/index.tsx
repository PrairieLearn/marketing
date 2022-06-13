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
import phys111Image from "../../../lib/images/phys111.png";
import yorkjonatanImage from "../../../lib/images/york-jonatan.png";

interface CourseCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  institution: string;
  rubric?: string;
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
        <a className="position-relative" style={{ aspectRatio: "5 / 3" }}>
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
        {rubric && (
          <p className="mb-1">
            <strong>Rubric: </strong> {rubric}
          </p>
        )}
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
          <Heading>Course Catalog</Heading>
          <p>
            Courses are home to all the{" "}
            <Link href="/gallery/assessments">assessments</Link> and{" "}
            <Link href="/gallery/questions">questions</Link> you have created.
            Browse through these PrairieLearn courses in a variety of subjects.
            You can try out different assessment types, see how questions are
            auto-graded and receive immediate feedback. If you would like to
            have access to the source code, you can contact the course
            instructor directly.
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
              image={phys111Image}
              title="Intro Physics for the Physical Sciences I"
              href="https://ca.prairielearn.com/pl/course_instance/2344"
              institution="The University of British Columbia - Okanagan Campus"
              rubric="PHYS 111"
              ownerName="Firas Moosvi"
              ownerEmail="firas.moosvi@ubc.ca"
            >
              <p className="mb-0">
                Introduction to mechanics primarily for students majoring in the
                physical sciences (e.g. physics, chemistry, mathematics,
                computer science, geology, physical geography) or engineering.
                Particle kinematics and dynamics, work and energy, momentum,
                gravitation, rigid body motion with applications to the physical
                sciences.
              </p>
            </CourseCard>

            <CourseCard
              image={yorkjonatanImage}
              title="Miscellaneous Computer Systems Topics"
              href="https://ca.prairielearn.com/pl/course_instance/2284"
              institution="York University"
              ownerName="Jonatan Schroeder"
              ownerEmail="jonatan@yorku.ca"
            >
              <p className="mb-0">
                This demonstration course includes questions covered in multiple
                computer science courses, particularly in 2nd and 3rd year
                courses. Questions include topics like abstraction,
                polymorphism, data structures, concurrency, virtual memory,
                security, and multimedia streaming. Assessments use many
                PrairieLearn features like randomized page tables and media
                playback delays, terminal-based workspaces with random inputs,
                custom elements, and container-based autograding.
              </p>
            </CourseCard>

            <CourseCard
              image={cs233Image}
              title="Internet Architecture and Protocols"
              href="https://www.prairielearn.org/pl/course_instance/129160"
              institution="New York University"
              rubric="ECE 6353"
              ownerName="Fraida Fund"
              ownerEmail="ffund@nyu.edu"
            >
              <p className="mb-0">bla bla bla</p>
            </CourseCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <h2 className="h4">Contribute to this page</h2>
          <p>
            If you want to have your PrairieLearn public course included in this
            page, please send us the appropriate information at{" "}
            <a href="mailto:hello@prairielearn.com">hello@prairielearn.com</a>.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

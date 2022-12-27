import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";

import styles from "./index.module.scss";
import cs233Image from "../../../lib/images/cs-233.png";
import phys111Image from "../../../lib/images/phys111.png";
import yorkjonatanImage from "../../../lib/images/york-jonatan.png";
import ece6353fraida from "../../../lib/images/ece6353fraida.png";
import tam211 from "../../../lib/images/tam211.png";
import tam212 from "../../../lib/images/tam212.png";
import tam251 from "../../../lib/images/tam251.png";
import cs357 from "../../../lib/images/cs357.png";

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
    <article className="card border-secondary">
      <Link
        href={href}
        className="position-relative"
        style={{ aspectRatio: "5 / 3" }}
      >
        <Image
          src={image}
          fill
          alt={title}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto"
          }} />
      </Link>
      <div className="card-body">
        <Link href={href}>
          <h3 className="card-title h5">{title}</h3>
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
          <strong>Contact:</strong> {ownerName} (
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
              image={tam211}
              title="Statics"
              href="https://www.prairielearn.org/pl/course_instance/129328"
              institution="University of Illinois at Urbana-Champaign"
              rubric="TAM 211"
              ownerName="Wayne Chang"
              ownerEmail="wlchang@illinois.edu"
            >
              <p className="mb-0">
                Forces, moments, and couples; resultants of force systems;
                equilibrium analysis and free-body diagrams; analysis of forces
                acting on members of trusses, frames, etc.; shear-force and
                bending-moment distributions; Coulomb friction; centroids,
                center of mass, moment of inertia, polar moment of inertia, and
                product of inertia; virtual work; hydrostatic pressure;
                applications of statics in design.
              </p>
            </CourseCard>

            <CourseCard
              image={tam212}
              title="Introductory Dynamics"
              href="https://www.prairielearn.org/pl/course_instance/129330"
              institution="University of Illinois at Urbana-Champaign"
              rubric="TAM 212"
              ownerName="Matthew West"
              ownerEmail="mwest@illinois.edu"
            >
              <p className="mb-0">
                Kinematics and dynamics of the three-dimensional motion of
                particles; kinematics and dynamics of the plane motion of rigid
                bodies; methods of work/energy and impulse/momentum; moving
                reference frames.
              </p>
            </CourseCard>

            <CourseCard
              image={tam251}
              title="Introductory Solid Mechanics"
              href="https://www.prairielearn.org/pl/course_instance/129329"
              institution="University of Illinois at Urbana-Champaign"
              rubric="TAM 251"
              ownerName="Mariana Silva"
              ownerEmail="mfsilva@illinois.edu"
            >
              <p className="mb-0">
                Relationship between internal stresses and deformations produced
                by external forces acting on deformable bodies, and design
                principles based on mechanics of solids: normal stresses, shear
                stresses, and deformations produced by tensile, compressive,
                torsional, and bending loading of members; beam deflections;
                elastic energy and impact; multi-dimensional stress states;
                buckling of columns.
              </p>
            </CourseCard>

            <CourseCard
              image={cs357}
              title="Numerical Methods"
              href="https://www.prairielearn.org/pl/course_instance/128953"
              institution="University of Illinois at Urbana-Champaign"
              rubric="CS 357"
              ownerName="Mariana Silva"
              ownerEmail="mfsilva@illinois.edu"
            >
              <p className="mb-0">
                Fundamentals of numerical methods for students in science and
                engineering; floating-point computation, systems of linear
                equations, approximation of functions and integrals, the single
                nonlinear equation, and the numerical solution of ordinary
                differential equations; various applications in science and
                engineering; programming exercises and use of high quality
                mathematical library routines.
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
              image={ece6353fraida}
              title="Internet Architecture and Protocols"
              href="https://www.prairielearn.org/pl/course_instance/129160"
              institution="New York University"
              rubric="ECE 6353"
              ownerName="Fraida Fund"
              ownerEmail="ffund@nyu.edu"
            >
              <p className="mb-0">
                This course is a lab-intensive bottom-up overview of computer
                networks. The PrairieLearn questions for this course introduce
                hypothetical network scenarios, and ask students to describe the
                configuration or sequence of events that will occur in the
                network.
              </p>
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

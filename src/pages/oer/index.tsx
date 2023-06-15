import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../components/Banner";
import { Heading } from "../../components/Heading";

import styles from "./index.module.scss";
import tam211 from "../../lib/images/tam211.png";
import tam212 from "../../lib/images/tam212.png";
import tam251 from "../../lib/images/tam251.png";
import cs357 from "../../lib/images/cs357.png";

interface CourseCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  ownerName: string;
  ownerEmail: string;
  children: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  href,
  ownerName,
  ownerEmail,
  children,
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
        {children}
      </div>
    </article>
  );
};

export default function Courses() {
  return (
    <React.Fragment>
      <Head>
        <title>OER | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Open Educational Resources"
        subtitle="Template questions to help you get started with PrairieLearn"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <Heading>Course Catalog</Heading>
          <p>
            Courses are home to all the{" "}
            <Link href="/gallery/assessments">assessments</Link> and{" "}
            <Link href="/gallery/questions">questions</Link> you have created.
            Browse through these PrairieLearn courses in a variety of subjects.
            If you find a question that you like, you can copy it to your own course, 
            and make changes if you want!
          </p>

          <div className={styles.grid}>

            <CourseCard
              image={cs357}
              title="Physics: Mechanics"
              href="https://us.prairielearn.com/pl/course_instance/132679"
              ownerName="Mariana Silva"
              ownerEmail="mfsilva@illinois.edu"
            >
              <p className="mb-0">
                Explore concepts such as kinematics; Newton's laws of motion, work, energy, and power; 
                systems of particles and linear momentum.
              </p>
            </CourseCard>

            <CourseCard
              image={cs357}
              title="Physics: E&M"
              href="https://us.prairielearn.com/pl/course_instance/132679"
              ownerName="Mariana Silva"
              ownerEmail="mfsilva@illinois.edu"
            >
              <p className="mb-0">
              Explore concepts such as electrostatics, conductors, 
              capacitors and dielectrics and electric circuits.
              </p>
            </CourseCard>

            <CourseCard
              image={tam211}
              title="Statics"
              href="https://us.prairielearn.com/pl/course_instance/129328"
            >
              <p className="mb-0">
                Forces, moments, and couples; resultants of force systems;
                equilibrium analysis and free-body diagrams; trusses and frames; 
                shear-force and bending-moment distributions; friction; 
                moment of inertia; virtual work; hydrostatic pressure.
              </p>
            </CourseCard>

            <CourseCard
              image={tam212}
              title="Introductory Dynamics"
              href="https://us.prairielearn.com/pl/course_instance/129330"
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
              href="https://us.prairielearn.com/pl/course_instance/129329"
              institution="University of Illinois at Urbana-Champaign"
              rubric="TAM 251"
              ownerName="Mariana Silva"
              ownerEmail="mfsilva@illinois.edu"
            >
              <p className="mb-0">
                Normal stresses, shear
                stresses, and deformations produced by tensile, compressive,
                torsional, and bending loading of members; beam deflections;
                multi-dimensional stress states.
              </p>
            </CourseCard>

            <CourseCard
              image={cs357}
              title="Intro to Programming with Python"
              href="https://us.prairielearn.com/pl/course_instance/132679"
              ownerName="Craig Zilles"
              ownerEmail="craig@prairielearn.com"
            >
              <p className="mb-0">
                Introduction to concepts and tools of computer science 
                using the Python programming language; types, boolean logic, 
                iterations, lists, arrays.
              </p>
            </CourseCard>

            <CourseCard
              image={cs357}
              title="Numerical Methods"
              href="https://us.prairielearn.com/pl/course_instance/132679"
              ownerName="Mariana Silva"
              ownerEmail="mfsilva@illinois.edu"
            >
              <p className="mb-0">
                Fundamentals of numerical methods for students in science and
                engineering; programming exercises in python.
              </p>
            </CourseCard>

        </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <h2 className="h4">License</h2>
          <p>
            do we need to add text here? authorship?
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

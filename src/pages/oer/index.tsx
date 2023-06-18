import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

import { PageBanner } from "../../components/Banner";
import { Heading } from "../../components/Heading";
import { RequestCourseModal } from "../../components/RequestCourseModal";

import styles from "./index.module.scss";
import eorstatics from "../../lib/images/tam211.png";
import eordynamics from "../../lib/images/tam212.png";
import eorsolids from "../../lib/images/tam251.png";
import eornumerical from "../../lib/images/cs357.png";
import eorphysics1 from "../../lib/images/EORphysics1.png";
import eorphysics2 from "../../lib/images/EORphysics2.png";

interface CourseCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  children: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  href,
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
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);
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
            If you find a question that you like, you can copy it to your own
            course, and make changes if you want!
          </p>
          <div className="alert alert-primary mb-0">
            <p>
              You&apos;ll be asked to sign in to PrairieLearn in order to access
              the courses below. If you want to copy questions for your own use,
              you will first need to request your PrairieLearn course space,
              which is always free for instructors.
            </p>
            <div className="col-md-12 text-center">
              <button
                className="btn btn-light btn-lg me-3 mt-3"
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
          <div className={styles.grid}>
            <CourseCard image={eorphysics1} title="Physics: Mechanics" href="">
              <p className="mb-0">
                Explore concepts such as kinematics; Newton&apos;s laws of
                motion, work, energy, and power; systems of particles and linear
                momentum.
              </p>
            </CourseCard>

            <CourseCard image={eorphysics2} title="Physics: E&M" href="">
              <p className="mb-0">
                Explore concepts such as electrostatics, conductors, capacitors
                and dielectrics and electric circuits.
              </p>
            </CourseCard>

            <CourseCard
              image={eorstatics}
              title="Statics"
              href="https://us.prairielearn.com/pl/course_instance/129328"
            >
              <p className="mb-0">
                Forces, moments, and couples; resultants of force systems;
                equilibrium analysis and free-body diagrams; trusses and frames;
                shear-force and bending-moment distributions; friction; moment
                of inertia; virtual work; hydrostatic pressure.
              </p>
            </CourseCard>

            <CourseCard
              image={eordynamics}
              title="Introductory Dynamics"
              href="https://us.prairielearn.com/pl/course_instance/129330"
            >
              <p className="mb-0">
                Kinematics and dynamics of the three-dimensional motion of
                particles; kinematics and dynamics of the plane motion of rigid
                bodies; methods of work/energy and impulse/momentum; moving
                reference frames.
              </p>
            </CourseCard>

            <CourseCard
              image={eorsolids}
              title="Introductory Solid Mechanics"
              href="https://us.prairielearn.com/pl/course_instance/129329"
            >
              <p className="mb-0">
                Normal stresses, shear stresses, and deformations produced by
                tensile, compressive, torsional, and bending loading of members;
                beam deflections; multi-dimensional stress states.
              </p>
            </CourseCard>

            <CourseCard image={eornumerical} title="Numerical Methods" href="">
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
            All content here is licensed as open licensed. See each question for
            license details.
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

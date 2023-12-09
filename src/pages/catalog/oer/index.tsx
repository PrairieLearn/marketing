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
        title="Open Educational Resources (OER)"
        subtitle="A catalog of questions to help you get started with PrairieLearn"
      />

      <div className={classnames("container-fluid my-3")}> 
        <div className="container-md">
          <div className="alert alert-primary mb-0">
            <p>
              You&apos;ll be asked to sign in to PrairieLearn to view our question catalog.
              If you want to use any of these questions, 
              you will first need to request your PrairieLearn course
              space, which is always free for instructors.
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
          <Heading>Question Templates</Heading>
          <p>
            Browse through our template questions in a variety of
            subjects. If you find a question that you like, you can copy it to
            your own course, and make changes if you want!
          </p>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <div className={styles.grid}>
            <CourseCard
              image={eorphysics1}
              title="Physics: Mechanics"
              href="https://us.prairielearn.com/pl/course_instance/136441/assessment/2350772"
            >
              <p className="mb-0">
                Kinematics; Newton&apos;s laws of motion, work, energy, power;
                systems of particles; linear momentum.
              </p>
            </CourseCard>

            <CourseCard
              image={eorphysics2}
              title="Physics: E&M"
              href="https://us.prairielearn.com/pl/course_instance/136442/assessment/2350773"
            >
              <p className="mb-0">
                Electrostatics; conductors, capacitors and dielectrics; electric
                circuits; inductance and magnetism.
              </p>
            </CourseCard>

            <CourseCard
              image={eorstatics}
              title="Statics"
              href="https://us.prairielearn.com/pl/course_instance/136474/assessment/2350805"
            >
              <p className="mb-0">
                Forces, moments; resultants of force systems; equilibrium and
                free-body diagrams; trusses and frames; shear-force and
                bending-moment diagrams; friction; moment of inertia; virtual
                work; hydrostatic pressure.
              </p>
            </CourseCard>

            <CourseCard
              image={eordynamics}
              title="Introductory Dynamics"
              href="https://us.prairielearn.com/pl/course_instance/136475/assessment/2350806"
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
              href="https://us.prairielearn.com/pl/course_instance/136415/assessment/2350745"
            >
              <p className="mb-0">
                Normal and shear stresses; axial loading; torque; bending in
                beams; deflections; multi-dimensional stress states.
              </p>
            </CourseCard>

            <CourseCard
              image={eornumerical}
              title="Numerical Methods"
              href="https://us.prairielearn.com/pl/course_instance/136413/assessment/2350744"
            >
              <p className="mb-0">
                Floating-point; errors; Monte Carlo simulations; linear system
                of equations; eigenvalues; optimization; nonlinear problems;
                singular value decomposition; programming exercises in Python.
              </p>
            </CourseCard>

            <CourseCard
              image={eorthermo}
              title="Thermodynamics"
              href="https://us.prairielearn.com/pl/course_instance/136573/assessment/2351036"
            >
              <p className="mb-0">
                Classical thermodynamics through the second law; system and
                control-volume analyses of thermodynamic processes;
                irreversibility and availability; relations for ideal gas
                mixtures.
              </p>
            </CourseCard>

            <CourseCard
              image={eorpython}
              title="Introduction to Python"
              href="https://us.prairielearn.com/pl/course_instance/136606/assessment/2351069"
            >
              <p className="mb-0">
                Introduction to computer programming using the Python
                programming language; data types, control structures, functions,
                and arrays.
              </p>
            </CourseCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <Heading>Publicly Shared Questions</Heading>
          <p>
            Courses are home to all the{" "}
            <Link href="/catalog/assessments">assessments</Link> and{" "}
            <Link href="/catalog/questions">questions</Link> you have created.
            Browse through these PrairieLearn courses in a variety of subjects.
            You can try out different assessment types, see how questions are
            auto-graded and receive immediate feedback. If you would like to
            have access to the source code, you can contact the course
            instructor directly.
          </p>
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
            If you want to share your PrairieLearn content in this
            page, please contact us at{" "}
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

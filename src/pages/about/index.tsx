import React from "react";
import classnames from "classnames";
import Head from "next/head";
import { ImageProps } from "next/image";

import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";
import Image from "../../components/Image";

import styles from "./index.module.scss";
import mattImage from "../../lib/images/team/matthew_west.jpeg";
import mariImage from "../../lib/images/team/mariana_silva.png";
import timImage from "../../lib/images/team/bretl.png";
import craigImage from "../../lib/images/team/zilles.jpeg";
import nathanImage from "../../lib/images/team/nathan.jpeg";
import emptyImage from "../../lib/images/team/empty-avatar-01_1.jpeg";


interface PeopleCardProps {
  image: ImageProps["src"];
  name: string;
  title: string;
  children: React.ReactNode;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  image,
  name,
  title,
  children,
}) => {
  return (
    <article className="card border-secondary mb-1">
      <div className="position-relative mt-2" style={{ aspectRatio: "1 / 1" }}>
        <Image src={image} layout="fill" objectFit="contain" alt={title} />
      </div>
      <div className="card-body">   
        <h3 className="card-title h6">{name}</h3>    
        <p className="mb-1">
          {title}
        </p>
        {children}
      </div>
    </article>
  );
};



const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About | PrairieLearn</title>
      </Head>

      <PageBanner
        title="About us"
        subtitle="We are passionate about teaching and strive to deliver the best course material to our students."
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>Our Vision</Heading>
              <p>
                We believe that students should have access to quality education
                from anywhere in the world, and that instructors should have an
                adaptable platform to deliver that education.
              </p>
              <p>
                With PrairieLearn, we have opened the door for instructors to
                improve their teaching workflow without compromising the quality
                of education they are delivering to students.
              </p>
            </Stack>
          </Stack>
        </div>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>Our Story</Heading>
                <h5>Built by professors and students!</h5>
                  <p>
                    Add story here
                  </p>
            </Stack>
          </Stack>
        </div>
      </div>

      <div className="my-3 py-5 bg-dark">
        <div className="container-md">
          <Row>
            <Column>
              <h2 className="text-white">Open-source. Forever.</h2>
              <p className="text-white ">
                PrairieLearn began life as open-source software, and we&apos;re
                committed to making sure it stays that way. With an active
                developer community of professors, course staff, and students,
                PrairieLearn gets better all the time.
              </p>
              <div className="d-flex">
                <a
                  href="https://github.com/PrairieLearn/PrairieLearn"
                  className="btn btn-light me-3"
                >
                  GitHub →
                </a>
                <a
                  href="https://prairielearn.readthedocs.io/en/latest/"
                  className="btn btn-light"
                >
                  Documentation →
                </a>
              </div>
            </Column>
          </Row>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>Co-Founders Team</Heading>
                  
              <div className={styles.grid}>
                <PeopleCard
                  image={mattImage}
                  name="Matthew West"
                  title="Creator, CPO"
                >
                </PeopleCard>
                <PeopleCard
                  image={nathanImage}
                  name="Nathan Walters"
                  title="CTO"
                >
                </PeopleCard>
                <PeopleCard
                  image={mariImage}
                  name="Mariana Silva"
                  title="CEO"
                >
                </PeopleCard>
                <PeopleCard
                  image={craigImage}
                  name="Craig Zilles"
                  title=""
                >
                </PeopleCard>
                <PeopleCard
                  image={emptyImage}
                  name="David Mussulman"
                  title=""
                >
                </PeopleCard>
                <PeopleCard
                  image={timImage}
                  name="Timothy Bretl"
                  title=""
                >
                </PeopleCard>
              </div>







            </Stack>
          </Stack>
        </div>
      </div>


      <DemoCourseCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
      />
    </React.Fragment>
  );
}

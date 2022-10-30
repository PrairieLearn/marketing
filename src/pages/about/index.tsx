import React from "react";
import classnames from "classnames";
import Head from "next/head";
import Image, { ImageProps } from "next/image";

import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";

import styles from "./index.module.scss";
import mattImage from "../../lib/images/team/matthew_west.jpeg";
import mariImage from "../../lib/images/team/mariana_silva.png";
import timImage from "../../lib/images/team/bretl.png";
import craigImage from "../../lib/images/team/zilles.jpeg";
import nathanImage from "../../lib/images/team/nathan.jpeg";
import daveImage from "../../lib/images/team/dave.png";

interface PeopleCardProps {
  image: ImageProps["src"];
  name: string;
  title: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, name, title }) => {
  return (
    <article className="card border-secondary mb-1">
      <div className="position-relative" style={{ aspectRatio: "1 / 1" }}>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title h6">{name}</h3>
        <p className="mb-1">{title}</p>
      </div>
    </article>
  );
};

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
          <div className="row">
            <div className="col-md-6 order-1 pt-2">
              <Heading>Mission</Heading>
              <p>
                With PrairieLearn, we open the door for instructors to improve
                their teaching workflow without compromising the quality of
                education they are delivering to students.
              </p>
            </div>
            <div className="col-md-6 order-1 pt-2">
              <Heading>Vision</Heading>
              <p>
                We believe that students should have access to quality education
                from anywhere in the world, and that instructors should have an
                adaptable platform to deliver that education.
              </p>
            </div>
          </div>
        </div>

        <div className="container-md pt-2">
          <Stack spacing={4}>
            <Heading>Our Story</Heading>
            <p>
              PrairieLearn is the evolution of over 10 years of tool building
              and refinement for our own classes. The flagship campus of the
              University of Illinois is home to both one of the largest and most
              prestigious Colleges of Engineering in the world. We built this
              tool to enable us to maintain that excellence in the presence of
              large enrollment classes. Through automation of routine grading
              and administration tasks, we freed ourselves and members of our
              course staff to focus on critical activities that humans perform
              better than software, like one-on-one tutoring and offering
              open-ended lab projects.
            </p>
            <p>
              PrairieLearn was designed to enable mastery learning in a way that
              wasn&lsquo;t possible with paper homework. With immediate feedback
              and the opportunity to try another problem whenever the student
              wants, PrairieLearn provides a learning experience that is better
              for students and has lower administrative overhead. Gone are the
              days of piles of hand-graded written homework (returned to
              students a week after they were turned in) that are never picked
              up. Gone are the days where our students ask us for more practice
              problems. We have eliminated the friction between a
              student&lsquo;s desire to practice and their ability to practice,
              by providing an infinite supply of problems and, in so doing, we
              find that students practice more and achieve more.
            </p>
            <p>
              Over the years, we have identified better ways of doing things and
              novel use cases, and those insights have been rolled back into the
              design of the software. When the authors of the software are also
              some of its most demanding users, you get quality tools that solve
              actual problems. We find these tools to be a joy to use, and we
              think you will too.
            </p>
          </Stack>
        </div>

        <div className="container-md pt-2">
          <Stack spacing={4}>
            <Heading>PrairieLearn, Inc.</Heading>

            <p>
              PrairieLearn began life as open-source software, and it will
              remain that way forever. This means that institutions and
              individuals can run PrairieLearn on their own infrastructure and
              make changes to it at will. PrairieLearn has a strong community of
              developers who frequently contribute new features, improvements,
              and fixes.
            </p>

            <p>
              However, we&apos;ve found that most instructors would rather focus
              on running their courses instead of operating and scaling
              software. We started PrairieLearn, Inc. to provide a paid hosting
              option. This ensures that everyone can take advantage of all that
              PrairieLearn has to offer without having to become experts in
              server administration.
            </p>

            <p>
              Paid subscriptions cover the costs of running PrairieLearn
              servers, and they also fund our system administrators who operate
              the service and are responsible for ongoing maintenance, security,
              upgrades, and support.
            </p>
          </Stack>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md">
          <Stack spacing={4}>
            <Heading>Our Team</Heading>

            <div className={styles.grid}>
              <PeopleCard
                image={mattImage}
                name="Matthew West"
                title="Co-founder, Creator, CPO"
              />
              <PeopleCard
                image={nathanImage}
                name="Nathan Walters"
                title="Co-founder, CTO"
              />
              <PeopleCard
                image={mariImage}
                name="Mariana Silva"
                title="Co-founder, CEO"
              />
              <PeopleCard
                image={craigImage}
                name="Craig Zilles"
                title="Co-founder"
              />
              <PeopleCard
                image={daveImage}
                name="David Mussulman"
                title="Co-founder"
              />
              <PeopleCard
                image={timImage}
                name="Timothy Bretl"
                title="Co-founder"
              />
            </div>
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

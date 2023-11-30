import React from "react";
import classnames from "classnames";
import Head from "next/head";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";
import Stack from "../../../components/Stack";

export default function SIGCSE2024() {
  return (
    <React.Fragment>
      <Head>
        <title>SIGCSE 2024</title>
      </Head>

      <PageBanner
        title="SIGCSE 2024"
        subtitle="Technical Symposium on Computer Science Education"
      />

      <div className={classnames("container-fluid py-4")}>
        <div className="container-md pt-2">
          <Stack spacing={4}>
            <Heading>
              Affiliated Event: Spiffy Assessments with PrairieLearn
            </Heading>

            <p>
              A key element in both mastery learning and competency-based
              education involves providing students with multiple opportunities
              to practice with rapid feedback, a feature provided by
              autograders. PrairieLearn is an open-source assessment authoring
              system that empowers the development of exceptionally rich
              interactive STAR questions &#8212; Skill-specific, Tagged to
              course competencies, Auto-graded, and Randomizable.
            </p>
            <p>
              Questions are formulated as problem generators capable of
              producing multiple variants of a question. This allows question
              authors to utilize the same question generator across different
              assignments and semesters, reducing the workload in the long run
              and facilitating the implementation of second-chance exams. In
              addition, this framework empowers students to generate multiple
              instances of a question, providing them with enhanced practice
              opportunities.
            </p>
            <p>
              Currently, PrairieLearn is actively adopted in over 800 courses
              across 20 universities. In this affiliated event, instructors from
              these courses will showcase the innovative online assessments
              they’ve created using PrairieLearn, and they are eager to share
              these resources with the broader instructor community. Presenters
              will also be happy to discuss their experience authoring these
              assessments.
            </p>

            <h4>Organizers</h4>
            <ul>
              <li>
                Prof. Mariana Silva, University of Illinois Urbana-Champaign, <a href= "mailto:mfsilva@illinois.edu">mfsilva@illinois.edu</a>, <a href="https://mfsilva.web.illinois.edu/">https://mfsilva.web.illinois.edu/</a>
              </li>
              <li>
                Prof. Firas Moosvi, University of British Columbia, <a href= "mailto:firas.moosvi@ubc.ca">firas.moosvi@ubc.ca</a> , <a href="https://cmps.ok.ubc.ca/about/contact/firas-moosvi/">https://cmps.ok.ubc.ca/about/contact/firas-moosvi/</a>
              </li>
              <li>
                Prof. Dan Garcia, UC Berkeley,  <a href= "mailto:ddgarcia@berkeley.edu">ddgarcia@berkeley.edu</a> , <a href="https://people.eecs.berkeley.edu/~ddgarcia/">www.cs.berkeley.edu/~ddgarcia</a>
                
              </li>
              <li>
                Prof. Armando Fox, UC Berkeley, <a href= "mailto:fox@berkeley.edu">fox@berkeley.edu</a>, <a href="https://www2.eecs.berkeley.edu/Faculty/Homepages/fox.html">www.cs.berkeley.edu/~fox</a>
              </li>
            </ul>

            <h4>Tentative Agenda</h4>

            <p>
              After a brief (~10 minute) overview of PrairieLearn, the
              subsequent ~80 minutes will be dedicated to showcasing a diverse
              range of assessments designed for specific skills in both lower-
              and upper-division computing courses. All these assessments will
              be available to participants, providing them with the option to
              “follow along” and actively engage with the live assessments on
              their own laptops during the event.
            </p>

            <h4>Who should attend</h4>

            <p>
              This event is open to any instructor (K-12, higher education,
              professional/continuing education) interested in mastery learning
              and competency-based education. It is designed for those who wish
              to learn how they can use an open-source authoring platform to
              generate very rich assessments and discover the full potential of
              such a system. Current PrairieLearn users are also encouraged to
              participate, not only to gain insights into how others are using
              the platform, but also to share their experiences and assessment
              code. This will be a great opportunity for instructors from
              different backgrounds and experiences to come together, learn from
              one another, and foster a collaborative exchange of knowledge.
            </p>

            <h4>Time and Location</h4>

            <p>TBA</p>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

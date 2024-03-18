import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PageBanner } from "../../components/Banner";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";

export default function SIGCSE2024() {
  return (
    <React.Fragment>
      <Head>
        <title>SIGCSE 2024 Spiffy PrairieLearn Questions</title>
      </Head>

      <PageBanner
        title="SIGCSE 2024"
        subtitle="Technical Symposium on Computer Science Education"
      />

      <div className="container-fluid py-4">
        <div className="container-md pt-2">
          <Stack spacing={4}>
            <Heading>
              Affiliated Event: Spiffy Questions with PrairieLearn
            </Heading>

            <p>
              A key element in both mastery learning and competency-based
              education involves providing students with multiple opportunities
              to practice with rapid feedback, a feature provided by
              autograders. PrairieLearn is an open-source assessment authoring
              system that empowers the development of exceptionally rich
              interactive questions.
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
              across 20 universities.{" "}
              <strong>
                In this affiliated event, instructors from these courses will
                showcase the innovative online assessments they’ve created using
                PrairieLearn, and they are eager to share these resources with
                the broader instructor community.
              </strong>{" "}
              Presenters will also be happy to discuss their experience
              authoring these assessments.
            </p>

            <h4>Organizers</h4>
            <ul>
              <li>
                Prof. Mariana Silva, University of Illinois Urbana-Champaign,{" "}
                <a href="mailto:mfsilva@illinois.edu">mfsilva@illinois.edu</a>,{" "}
                <a href="https://mfsilva.web.illinois.edu/">
                  https://mfsilva.web.illinois.edu/
                </a>
              </li>
              <li>
                Prof. Craig Zilles, University of Illinois Urbana-Champaign,{" "}
                <a href="mailto:zilles@illinois.edu">zilles@illinois.edu</a>,{" "}
                <a href="https://mfsilva.web.illinois.edu/">
                  https://zilles.cs.illinois.edu
                </a>
              </li>
              <li>
                Prof. Armando Fox, UC Berkeley,{" "}
                <a href="mailto:fox@berkeley.edu">fox@berkeley.edu</a>,{" "}
                <a href="https://www2.eecs.berkeley.edu/Faculty/Homepages/fox.html">
                  www.cs.berkeley.edu/~fox
                </a>
              </li>
              <li>
                Prof. Firas Moosvi, University of British Columbia,{" "}
                <a href="mailto:firas.moosvi@ubc.ca">firas.moosvi@ubc.ca</a> ,{" "}
                <a href="https://www.cs.ubc.ca/people/firas-moosvi">
                  https://www.cs.ubc.ca/people/firas-moosvi
                </a>
              </li>
              <li>
                Prof. Dan Garcia, UC Berkeley,{" "}
                <a href="mailto:ddgarcia@berkeley.edu">ddgarcia@berkeley.edu</a>{" "}
                ,{" "}
                <a href="https://people.eecs.berkeley.edu/~ddgarcia/">
                  www.cs.berkeley.edu/~ddgarcia
                </a>
              </li>
            </ul>

            <h4>Presenters</h4>
            <ul>
              <li>
                Prof. Gary Dahl, University of Wisconsin-Madison,{" "}
                <a href="mailto:dahl@cs.wisc.edu">dahl@cs.wisc.edu</a>,{" "}
                <a href="https://pages.cs.wisc.edu/~dahl/">
                  https://pages.cs.wisc.edu/~dahl/
                </a>
              </li>
              <li>
                David Smith, University of Illinois Urbana-Champaign,{" "}
                <a href="mailto:dhsmith2@illinois.edu">dhsmith2@illinois.edu</a>
                ,{" "}
                <a href="https://www.linkedin.com/in/david-smith-1b9499102/">
                  https://www.linkedin.com/in/david-smith-1b9499102/
                </a>
              </li>
              <li>
                Prof. Karina Mochetti, University of British Columbia,{" "}
                <a href="mailto:mochetti@cs.ubc.ca">mochetti@cs.ubc.ca</a>,{" "}
                <a href="https://www.cs.ubc.ca/~mochetti/">
                  https://www.cs.ubc.ca/~mochetti/
                </a>
              </li>
              <li>
                Prof. David Cooper, West Chester University,{" "}
                <a href="mailto:dcooper@wcupa.edu">dcooper@wcupa.edu</a> ,{" "}
                <a href="https://www.cs.wcupa.edu/~dcooper/">
                  https://www.cs.wcupa.edu/~dcooper/
                </a>
              </li>
              <li>
                Prof. Zachary Kurmas, Grand Valley State University,{" "}
                <a href="mailto:kurmasz@gvsu.edu">kurmasz@gvsu.edu</a> ,{" "}
                <a href="https://www.gvsu.edu/computing/kurmas-zachary-54.htm">
                  https://www.gvsu.edu/computing/kurmas-zachary-54.htm
                </a>
              </li>
              <li>
                Prof. Ramon Lawrence, University of British Columbia,{" "}
                <a href="mailto:ramon.lawrence@ubc.ca">ramon.lawrence@ubc.ca</a>
                ,{" "}
                <a href="https://cmps.ok.ubc.ca/about/contact/ramon-lawrence/">
                  https://cmps.ok.ubc.ca/about/contact/ramon-lawrence/
                </a>
              </li>
              <li>
                Prof. Joseph Hollingsworth, Rose-Hulman Institute of Technology{" "}
                <a href="mailto:hollings@rose-hulman.edu">
                  hollings@rose-hulman.edu
                </a>
                ,{" "}
                <a href="https://drholly77.github.io/Details/">
                  https://drholly77.github.io/Details/
                </a>
              </li>
              <li>
                Prof. Geoffrey Herman, University of Illinois Urbana-Champaign,{" "}
                <a href="mailto:glherman@illinois.edu">glherman@illinois.edu</a>
                ,{" "}
                <a href="https://cs.illinois.edu/about/people/faculty/glherman">
                  https://cs.illinois.edu/about/people/faculty/glherman
                </a>
              </li>
              <li>
                Prof. Jeff Erickson, University of Illinois Urbana-Champaign,{" "}
                <a href="mailto:jeffe@illinois.edu">jeffe@illinois.edu</a>,{" "}
                <a href="https://cs.illinois.edu/about/people/faculty/jeffe">
                  https://cs.illinois.edu/about/people/faculty/jeffe
                </a>
              </li>
              <li>
                Prof. Armando Fox, UC Berkeley,{" "}
                <a href="mailto:fox@berkeley.edu">fox@berkeley.edu</a>,{" "}
                <a href="https://www2.eecs.berkeley.edu/Faculty/Homepages/fox.html">
                  www.cs.berkeley.edu/~fox
                </a>
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

            <div className="container-fluid py-2">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <Link
                  href="https://us.prairielearn.com/pl/public/course/1305/questions"
                  className="btn btn-warning btn-lg me-3 mt-3"
                >
                  GO TO SPIFFY QUESTIONS PAGE
                </Link>
              </div>
            </div>

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

            <p>Friday, March 22, 12:00 pm to 13:30 pm, Rooms D137-138</p>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

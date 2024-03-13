import React from "react";
import classnames from "classnames";
import Head from "next/head";
import { PageBanner } from "../../components/Banner";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";

export default function SIGCSE2024() {
  return (
    <React.Fragment>
      <Head>
        <title>SIGCSE 2024 Computer-Based Testing</title>
      </Head>

      <PageBanner
        title="SIGCSE 2024"
        subtitle="Technical Symposium on Computer Science Education"
      />

      <div className="container-fluid py-4">
        <div className="container-md pt-2">
          <Stack spacing={4}>
            <Heading>BOF: Experiences With Computer-Based Testing</Heading>

            <p>
              Affordable, secure, and scalable assessment delivery is an
              essential component of large university courses, whether online or
              in-person. The switch to Computer-Based Testing (CBT) can have a
              surprising, and almost transformational effect on pedagogy. Modern
              CBT systems provide almost unlimited flexibility in the types of
              questions they can support, for both manual grading and
              autograding, and CBT has now been adopted at several universities
              and is under serious consideration at others. In this BoF, faculty
              interested in learning about CBT and how to implement it at their
              institution are invited to ask their questions. Faculty
              experienced with CBT are invited to share how CBT has changed
              their approach, pedagogy, and behavior and how to advocate for its
              adoption.
            </p>

            <h4>Why is this important</h4>

            <p>
              Many computer science departments are struggling with enrollment
              pressure. While many parts of courses can be scaled effectively,
              traditional paper exams become a huge administrative burden due to
              authoring, printing, proctoring, providing feedback, and dealing
              with conflict exams. Furthermore, in programming-oriented courses,
              writing code on paper is less authentic than writing it on a
              computer. Computer-based testing is an alternative to paper exams
              that can reduce instructor workload while maintaining high
              academic standards. Key features of CBT are: 1) it facilitates
              writing question generators that can be re-used each semester, 2)
              it facilitates grading (automatic or manual) by capturing student
              work in a digital form, 3) it permits authentic code writing using
              standard tools, and 4) questions can get more sophisticated than
              what can be done on a paper exam.
            </p>
            <p>
              CBT can be deployed in many fashions: 1) using a dedicated testing
              center, 2) during pre-scheduled labs (lab exams), 3)
              bring-your-own-device (BYOD) with or without a lock down browser,
              and 4) online with or without remote proctoring, each of which
              represents different infrastructure vs. security trade-offs.
              Implementing CBT involves surmounting a number of obstacles,
              including developing or acquiring a bank of questions, IT
              infrastructure support, physical infrastructure (space, computers,
              staffing), and acclimating students to taking computer-based
              exams. By reducing the administrative overhead of summative
              assessment, CBT facilitates best practice pedagogies like frequent
              assessment and mastery learning.
            </p>

            <h4>Organizers</h4>
            <ul>
              <li>
                Prof. Armando Fox, UC Berkeley,{" "}
                <a href="mailto:fox@berkeley.edu">fox@berkeley.edu</a>,{" "}
                <a href="https://www2.eecs.berkeley.edu/Faculty/Homepages/fox.html">
                  www.cs.berkeley.edu/~fox
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
              <li>
                Prof. Firas Moosvi, University of British Columbia,{" "}
                <a href="mailto:firas.moosvi@ubc.ca">firas.moosvi@ubc.ca</a>,{" "}
                <a href="https://www.cs.ubc.ca/people/firas-moosvi">
                  https://www.cs.ubc.ca/people/firas-moosvi
                </a>
              </li>
              <li>
                Prof. Cinda Heeren, University of British Columbia,{" "}
                <a href="mailto:cheeren@cs.ubc.ca">cheeren@cs.ubc.ca</a>,{" "}
                <a href="https://www.cs.ubc.ca/people/cinda-heeren/">
                  https://www.cs.ubc.ca/people/cinda-heeren
                </a>
              </li>
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
                Prof. Matthew West, University of Illinois Urbana-Champaign,{" "}
                <a href="mailto:mwest@illinois.edu">mwest@illinois.edu</a>,{" "}
                <a href="https://lagrange.mechse.illinois.edu/">
                  https://lagrange.mechse.illinois.edu
                </a>
              </li>
            </ul>

            <h4>Tentative Agenda</h4>

            <p>
              We&lsquo;ll start with a round of introductions, where experienced
              users of CBT (including the moderators) briefly present their
              experiences and views on CBT. The bulk of the session will be a
              moderated Q&amp;A from participants. Some of the topics that may
              be discussed:
            </p>
            <ul>
              <li>What are the pros and cons of different approaches?</li>
              <li>What are the biggest challenges?</li>
              <li>How do you go about building a question bank?</li>
              <li>How have students reacted?</li>
              <li>How has the advent of ChatGPT affected CBT?</li>
              <li>
                What has been the reaction of your peers/colleagues about CBT?
              </li>
              <li>
                What software do you use for administering assessments and how
                happy are you with it?
              </li>
              <li>
                What does setting up a dedicated CBT testing center entail and
                how did you convince your administration?{" "}
              </li>
            </ul>

            <h4>Who should attend</h4>

            <p>
              This session may be of interest to (1) CBT-curious instructors
              seeking real stories from those using it; (2) CBT-experienced
              instructors who wants to share tips and offer advice to those
              looking to try it or advocating for it within their institutions;
              (3) staff who are involved in (or would be involved in) the
              operation of dedicated CBT facilities; (4) students and TAs who
              would be impacted by or would be interested in weighing in on the
              pros and cons of CBT from a student or TA point of view.
            </p>

            <h4>Time and Location</h4>

            <p>Thursday, March 21, 18:30-19:20, B113-114, Flock 2c</p>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

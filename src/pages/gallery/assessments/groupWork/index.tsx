import React from "react";
import Head from "next/head";
import classnames from "classnames";
import { Heading } from "../../../../components/Heading";
import { PageBanner } from "../../../../components/Banner";

import Image from "../../../../components/Image";
import groupPage from "./group-page1.png";

export default function DefaultGroup() {
  return (
    <React.Fragment>
      <Head>
        <title>Group Work | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Collaborative learning activities"
        subtitle="Learning with peers inside and outside the classroom"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <p>
            Research shows that collaborative learning can increase student
            persistence, improve learning outcomes, and foster better classroom
            cultures. Using PrairieLearn, instructors can provide group
            activities where students work collaborativelly in the same
            assessment, which is shared among all the group members.
          </p>

          <Heading>Group formation</Heading>

          <p>
            PrairieLearn provides the option for instructors to pre-arrange
            teams, or for students to create their own teams. For pre-assigned
            groups, instructors can select one of the following options:
          </p>
          <ul>
            <li>upload a CSV file with the group information</li>
            <li>
              let PrairieLearn assign students to groups at random, given a
              mininum and maximum group sizes
            </li>
          </ul>
          <p>
            Instructors can also let students self-assign to groups. This can be
            especially helpful when giving group activities during lecture,
            where groups can be created "on-the-fly" depending on the proximity
            of students. Instructors can also provide the minium and maximum
            group sizes under this configuration.
          </p>
          <p>
            For self-assignment, a student will create a group providing a group
            name. This student will receive a "join code" that can be used by
            others that want to join the group. Once the group reaches the
            minimum size, students are able to start the assessment. Every
            member of the group will have access to the same question variants,
            and consequently will also share the same grade.
          </p>

          <Heading>Facilitating collaboration among teams</Heading>

          <p>
            The simple creation of students' teams will rarely guarantee that
            students will work collaboratively. However, successful and
            productive collaborations can be greatly improved by careful design
            of the task, assignment of team roles and the use of available
            technologies to both promote collaborations among students and
            support the instructors implementing these activities.
          </p>
          <p>
            Assessments that are based on higher level skills such as
            <i>Analyze</i>, <i>Evaluate</i> and <i>Create</i> from the
            <a
              href="https://en.wikipedia.org/wiki/Bloom's_taxonomy"
              target="_blank"
            >
              Bloom's Taxonomy
            </a>
            produce more opportunities for students' interactions, where they
            can learn from each other. Low level skills which require students
            to remember simple concepts, or apply simple calculations will
            emphasize the existence of domineering leaders and free loaders.
            When designing group tasks, we focus on questions that produce
            discussions and decision-making.
          </p>
          <p>
            Another strategy to enhance collaborative learning is to provide
            activities that can be self-managed by the team, such that
            instructors act only as facilitators instead of source of
            information. In the course demo, we provide an example that uses
            JupyterLab notebooks for the [group
            assessment](https://www.prairielearn.org/pl/course_instance/128605/assessment/2310480).
            These notebooks can include text, images, and equations for content
            presentation, and also ask students to perform computations (in this
            example, using a Python 3 Kernel).
          </p>
          <p>
            We can use PrairieLearn external grader to check content for
            correctness. This will help students self-manage their progress.
            Instructors can define `#grade` cells inside the JupyterLab
            notebook, which will be auto-graded for instant feedback (see image
            below).
          </p>
          <Image
            src={ groupPage }
            alt="assessment generator scheme"
          />

          <p>
            Students in the same group will share the same JupyterLab, and the
            same submission history and scores. The notebooks are also
            synchronized in real-time for enhanced collaborations.
          </p>

          <p>
            A lack of clarity and experience in assuming team roles can lead
            students to default into domineering team leaders or passive
            free-loaders. Evidence-based practices such as Process Oriented
            Guided Inquiry Learning ([POGIL](https://pogil.org)) have shown that
            providing students with structured roles can help them participate
            more equitably during collaborative learning. We are currently
            implementing POGIL roles in PrairieLearn.
          </p>

          {/*     
        <Heading>Exam example from demo course</Heading>

        <h5>Question 1</h5>
        <p>This question asks students to compute a variable $c$ given two parameters 
          $a$ and $b$. The formula to compute $c$ is randomized (selected from a set of 4
          different formulas) and the parameters $a$ and $b$ are randomized as well. 
          Students have two attempts to complete this question: the first attempt for 
          full credit and the second attempt for partial credit (1/3 points).</p>
        
        <h5>Question 2</h5>
        <p>This question asks students to enter the matrix corresponding to a displayed 
          graph, which is generated in real-time based on randomized parameters. 
          Students have two attempts to complete the question. They can also receive 
          partial credit for each attempt, since each entry of the matrix is graded 
          separately.</p>

        <h5>Question 3</h5>
        <p>Highly randomized, in essence mixing 4 different questions into one, 
          since the circuit diagram changes (parallel and series), and the question 
          prompt changes (compute current or resistance). Since the solution involves 
          multiple computation steps, students get 5 attempts to complete the question
          for reduced credit.
        </p>

        <h5>Question 4</h5>
        <p>This question is randomly selected out of a pool of 3 question generators, 
          each one of them asking students to compute a different matrix and/or vector 
          operation, including matrix multiplication and outer product. 
          Each question generator also utilizes randomized parameters. 
          One of the advantages of keeping similar question variants within separate 
          question generators is the easy access to statistics, providing information 
          regarding question and exam fairness. The disadvantage is the cumbersome 
          bookkeeping of question generators, since one may have to coordinate changes 
          to many files when updates are needed.
        </p> */}
        </div>
      </div>
    </React.Fragment>
  );
}

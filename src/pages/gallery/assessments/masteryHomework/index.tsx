import React from "react";
import Head from "next/head";
import classnames from "classnames";
import { Heading } from "../../../../components/Heading";
import { PageBanner } from "../../../../components/Banner";
import { LinkButton } from "../../../../components/LinkButton";
import { QuestionCard } from "../../../../components/QuestionCard";

import Image from "../../../../components/Image";
import unlimitedVariants from "./unlimited-variants.png";
import unlimitedAttempts from "./one-variant-unlimited-attempts.png";
import setRetry from "./set-retry-per-variant.png";
// import question1Image from "./question1.png"
// import question2Image from "./question2.png"
// import question3Image from "./question3.png"
// import question4Image from "./question4.png"

import { plcourseURL } from "../../../../lib/urls";

import styles from "./index.module.scss";

export default function DefaultHomework() {
  return (
    <React.Fragment>
      <Head>
        <title>Homework | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Mastery-based Homework"
        subtitle="Repeated practice for mastery learning"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <p>
            Educational research and learning theory show that small number of
            single-practice problems may not be the most effective learning
            strategy for students. Mastery learning theory shows that different
            students require different amounts of practice to achieve
            proficiency in a given skill, and that all students require repeated
            practice. In addition, different learning skills require different
            learning approaches.
          </p>

          <p>
            PrairieLearn can be used to create different learning experiences
            for students, adjusted based on individual learning goals. We often
            use these homework as formative assessments, where students receive
            immediate feedback and have the opportunity to use the feedback to
            enhance their learning.
          </p>

          <p>
            PrairieLearn supports the development of{" "}
            <strong>question generators</strong>, defined by a set of html and
            python code that generate different{" "}
            <strong>question variants</strong> based on randomized parameters. A
            homework is defined by a collection of question generators.
          </p>

          <Heading>
            Drilling for mastery: unlimited variants with single attempt
          </Heading>

          <p>
            In this configuration, the question generator creates unlimited
            question variants, each one with a single attempt. Once students
            submit an answer to a question, they receive immediate feedback,
            indicating if the question was correct, partially correct, or
            incorrect. The feedback may also include more detailed explanation.
            No matter if a submission is correct or not, students have the
            ability to generate another question variant with a single attempt.
            Moreover, students are not penalized when submitting an incorrect
            attempt.
          </p>

          <Image
            src={ unlimitedVariants }
            alt="unlimited variants single attempt"
          />

          <p>
            Instructors can define the number of times a student needs to
            correctly answer a question variant to earn full credit. Since
            question variants present a different version of the question, this
            repetition provides students with the needed practice to achieve
            mastery. Even after students reach full credit for a given question,
            they can continue to work on other question variants for additional
            practice. We see students coming back to homework assessments when
            reviewing for exams.
          </p>

          <p>
            Question generators based on skill levels such as <i>Remember</i>,
            <i>Understand</i> and <i>Apply</i> from the
            <a
              href="https://en.wikipedia.org/wiki/Bloom's_taxonomy"
              target="_blank"
            >
              Bloom's Taxonomy
            </a>
            often involve a solution process that requires information retrival
            to answer conceptual questions or computation of simple expressions.
            These skills are the most appropriate for questions using the
            unlimited variants with single retry option.
          </p>

          <Heading>
            Repeated variant: unlimited variants with prescribed number of retry
            attempts
          </Heading>

          <p>
            More sophisticated skill levels can require multiple steps during
            the solution process, or combine knowledge of different topics. When
            creating more complex questions, instructors may want to provide
            students with additional attempts per question variant. This avoids
            unnecessary frustration of starting fresh on a new question variant
            when a small mistake is made during the solution process. Using this
            configuration, students can create a new question variant if they
            answer the question correctly or if they use all the retry attempts.
          </p>

          <Image
            src={ setRetry }
            alt="Unlimited variants prescribed number of attempts"
          />

          <p>
            Similarly to the above configuration, instructors can define the
            number of times a student needs to correctly answer a question
            variant to earn full credit.
          </p>

          <Heading>
            Fixed variant: unlimited retry attempts for a single question
            variant
          </Heading>

          <p>
            There are some situations where we want students to receive a single
            question variant and have unlimited attempts to complete the
            question successfully. This is desirable when the question involves
            a lot of computation, or includes specialized coding.
          </p>

          <Image
            src={ unlimitedAttempts }
            alt="Unlimited retry attempts for a single question variant"
          />
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <Heading>Example from demo course</Heading>

          <div className={classnames("container-fluid py-2")}>
            <QuestionCard
              title="Question 1"
              body="Students are asked to demonstrate basic thinking and remembering
              skills, by selecting the numbers that are prime (or odd, or even,
              etc). Students need to successully complete at least 3 question
              variants in order to receive full credit."
              image={unlimitedVariants}
            />
          </div>

          <div className={classnames("container-fluid py-2")}>
            <QuestionCard
              title="Question 2"
              body="Students are asked to demonstrate their understanding of binary and
              decimal numbers, by converting a decimal number to its binary
              representation. Students need to successully complete at least 2
              question variants in order to receive full credit."
              image={unlimitedVariants}
            />
          </div>

          <div className={classnames("container-fluid py-2")}>
            <QuestionCard
              title="Question 3"
              body="Students are asked to apply knowledge of derivatives to compute
              first order derivatives of polynomial equations. They need to
              successully complete at least 3 question variants in order to
              receive full credit."
              image={unlimitedVariants}
            />
          </div>

          <div className={classnames("container-fluid py-2")}>
            <QuestionCard
              title="Question 4"
              body="Students are asked to illustrate a vector with given position and
              orientation. Each question variant has two attempts, allowing
              students to retry the same question before generaring a new variant.
              In this example, students may have the correct understanding of the
              question, but potentially count the position incorrectly, or miss
              the correct orientation (clockwise or counter-clockwise). The second
              attempt gives students the opportunity to adjust their thinking,
              without having to start from the beginning. They need to successully
              complete at least 2 question variants in order to receive full
              credit."
              image={unlimitedVariants}
            />
          </div>

          <div className={classnames("container-fluid py-2")}>
            <QuestionCard
              title="Question 5"
              body="Students are asked to compute a quantity (stress) based on
              information obtained from a table that is randomized for each
              question variant. The computation of the stress involves several
              steps: finding the correct information from the table, identifying
              the correct equation and performing mathematical operations using
              the appropriate units. Since students can make small mistakes during
              the solution process, but still have the overall correct
              understanding of the problem, we provide 3 retry attempts for each
              question variant. Students need to successully complete at least 2
              question variants in order to receive full credit."
              image={unlimitedVariants}
            />
          </div>

          <div className={classnames("container-fluid py-2")}>
            <QuestionCard
              title="Question 6"
              body="Students are asked to apply knowledge from a given topic to contruct
              the solution of a ''real-world'' problem. Students have unlimited
              attempts to submit the correct solution for full credit."
              image={unlimitedVariants}
            />
          </div>
          
          <div className="row justify-content-center my-4">
            <div className="col-md-12 text-center">
              <LinkButton 
                label="Check this assessment live in PrairieLearn!" 
                href={ plcourseURL.exam_instantFeedback }
              />
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

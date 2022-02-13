import React from "react";
import Head from "next/head";
import classnames from "classnames";
import { Heading } from "../../../../components/Heading";
import { PageBanner } from "../../../../components/Banner";
import Image from "../../../../components/Image";

// import Stack from "../../components/Stack";
// import styles from "./index.module.scss";

export default function DefaultExam() {
  return (
    <React.Fragment>
      <Head>
        <title>Pre-Lecture | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Pre-Lecture for Async Learning"
        subtitle="Introducing new concepts online with checkpoints and instant feedback"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <p>
            Learning can happen in a variety of ways: in classrooms with a
            teacher-centered style, in flipped lectures, individual work or
            collaborative activities, asynchronously or synchronously online.
            Just like there are different teaching methods, people also learn in
            different ways. Some learners prefer to read, some prefer to watch
            videos, and others like hands-on work. Mixing different learning
            approaches can improve the learner engagement.
          </p>

          <p>
            Here we describe how PrairieLearn can be used to assign pre-lecture
            acvities that we combine a mixture of text, equations, plots, videos
            and interactive JupyterLabs to introduce a new topic where students
            can learn at their own pace. This assessment example includes short
            formative questions, so that students can assess their own learning.
          </p>

          <Heading>Example from demo course</Heading>

          <h5>Question 1</h5>
          <p>
            This question generator illustrates how we can combine text and
            equations to introduce new content to students. It follows with
            simple conceptual checkpoints to help students test their own
            understanding. Students have two attempts to complete these
            checkpoints, and they can create a new question variant if they
            answer them correctly or if they use all the retry attempts. At the
            end of each question variant, a video with the explanation of the
            question is displayed. Note that embedding videos inside questions
            is another method of content delivery that can be used with
            PrairieLearn.
          </p>

          <h5>Question 2</h5>
          <p>
            Here we use a JupyterLab notebook for an interactive example to
            support the introduction of another concept. Students need to answer
            a simple multiple-choice question to test their understanding of the
            notebook.
          </p>

          <h5>Question 3</h5>
          <p>
            The last question includes formative short questions that summarize
            the concepts introduced in the previous two questions. Several
            parameters are randomized, so that students can get more practice by
            generating different question variants, each one with two attempts.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";
import { getQuestions } from "../../lib/gallery/questions";
import { getAssessments } from "../../lib/gallery/assessments";

import styles from "./index.module.scss";
import Stack from "../../components/Stack";

interface Assessment {
  title: string;
  slug: string;
  summary: string;
}

interface Question {
  title: string;
  slug: string;
  summary: string;
  imageUrl?: string;
}

interface GalleryIndexProps {
  assessments: Assessment[];
  questions: Question[];
}

const GalleryIndex: React.FC<GalleryIndexProps> = ({
  assessments,
  questions,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Gallery | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Gallery</h1>
          <p className="lead">
            Explore all the functionality PrairieLearn has to offer.
          </p>
        </div>
        <h2>Assessments</h2>
        <p>
          Assessments are collections of questions that are graded together;
          they can be used for homeworks, exams, in-lecture content, group work,
          and more. An assessment defines point allocations for individual
          questions, rules to control access based on date or user, instructions
          for students, and more. They can use a variety of grading schemes.
        </p>
        <div className="mb-3">
          <Stack spacing={3}>
            {assessments.map((assessment) => {
              const assessmentHref = `/gallery/assessment/${assessment.slug}`;
              return (
                <article key={assessment.slug}>
                  <h3 className="h5">
                    <Link href={assessmentHref}>
                      <a>{assessment.title}</a>
                    </Link>
                  </h3>
                  <p className="mb-0">{assessment.summary}</p>
                </article>
              );
            })}
          </Stack>
        </div>
        <h2>Questions</h2>
        <p>
          Questions are the fundamental unit of content in PrairieLearn. While
          some questions are completely static, most PrairieLearn questions will
          contain logic to generate, display, and grade many unique variants of
          the same base question.
        </p>
        <p>
          If you&apos;re new to PrairieLearn, you should check out the{" "}
          <Link href="/gallery/intro">
            <a>introduction to PrairieLearn questions</a>
          </Link>{" "}
          to learn the key concepts used throughout these examples and all
          PrairieLearn questions.
        </p>
        <p>
          Once you&apos;re familiar with the basics, check out the below
          questions to see some examples of questions that take full advantage
          of the PrairieLearn platform.
        </p>
        <div className={classnames(styles.grid)}>
          {questions.map((question) => {
            const galleryHref = `/gallery/question/${question.slug}`;
            return (
              <article className="card" key={question.slug}>
                {question.imageUrl && (
                  <Link href={galleryHref}>
                    {/* Fit all images within 4:3 aspect ratio box*/}
                    <a style={{ paddingBottom: "75%", position: "relative" }}>
                      <Image
                        src={question.imageUrl}
                        layout="fill"
                        objectFit="contain"
                        alt="Preview of question"
                      />
                    </a>
                  </Link>
                )}
                <div className="card-body">
                  <Link href={galleryHref}>
                    <a>
                      <h3 className="card-title h5">{question.title}</h3>
                    </a>
                  </Link>
                  <p className="text-muted mb-0">{question.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GalleryIndex;

export const getStaticProps: GetStaticProps<GalleryIndexProps> = async () => {
  // Get assessments and filter out only the props we need on this page
  const rawAssessments = await getAssessments();
  const assessments = rawAssessments.map(({ title, slug, summary }) => ({
    title,
    slug,
    summary,
  }));

  const rawQuestions = await getQuestions();
  const questions = rawQuestions.map(({ title, slug, summary, image }) => ({
    title,
    slug,
    summary,
    imageUrl: image?.url,
  }));

  return {
    props: {
      assessments,
      questions,
    },
  };
};

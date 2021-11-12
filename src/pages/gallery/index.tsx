import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";

import { getQuestions } from "../../lib/gallery/questions";
import { getAssessments } from "../../lib/gallery/assessments";

import styles from "./index.module.scss";
import ContainerStyle from "../../components/Container.module.scss";
import Stack from "../../components/Stack";

import NextImage from "next/image";
import assessmentImage from "../../lib/images/assessment.png";
import questionImage from "../../lib/images/question.png";

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

const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

const GalleryIndex: React.FC<GalleryIndexProps> = ({
  assessments,
  questions,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Explore | PrairieLearn</title>
      </Head>
      <div
        className={classnames("container-fluid py-4", ContainerStyle.container)}
      >
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3">Explore</h1>
              <p className="text-white mt-4 fs-3">
                Explore all the functionality PrairieLearn has to offer.
              </p>
            </Column>
          </Row>
        </div>
      </div>

      <div className={classnames("container-fluid py-4 my-5")}>
        <div className="container-md">
          <div className="row">
            <div class="col-md-6">
              <div className="col-md-6">
                <img src="assessment.png" />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className={classnames("pb-3", styles.heading)}>
                Assessments
              </h2>
              <p>
                Assessments are collections of questions that are graded
                together. Use them to create homework, exam, quiz, pre-lecture,
                group work, or any other assignment you have in your course.
              </p>
              <p>
                An assessment defines point allocations for individual
                questions, rules to control access based on date or user,
                instructions for students, and more!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          "container-fluid py-4",
          ContainerStyle.grayContainer
        )}
      >
        <div className="container-md">
          <div className="mb-3">
            <h2 className={classnames("pb-3", styles.heading)}>
              Assessment Galery
            </h2>
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
        </div>
      </div>

      <div className={classnames("container-fluid py-4 my-5")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
              <h2 className={classnames("pb-3", styles.heading)}>Questions</h2>
              <p>
                Questions are the fundamental unit of content in PrairieLearn.
                While questions can be completely static, the key feature of
                PrairieLearn questions is the ability to generate, display, and
                grade many unique variants of the same base question.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          "container-fluid py-4",
          ContainerStyle.grayContainer
        )}
      >
        <div className="container-md">
          <div className="my-3">
            <h2 className={classnames("pb-3", styles.heading)}>
              Question Galery
            </h2>
            <p>
              New to PrairieLearn? Check{" "}
              <Link href="gallery/elementIntro">
                <a>introduction to PrairieLearn questions</a>
              </Link>{" "}
              to learn the key concepts used throughout these examples and all
              PrairieLearn questions.
            </p>

            <p>
              Once you're familiar with the basics, check out this question
              gallery with example questions that take full advantage of the
              PrairieLearn platform.
            </p>

            <div className={classnames(styles.grid)}>
              {questions.map((question) => {
                const galleryHref = `/gallery/question/${question.slug}`;
                return (
                  <article className="card" key={question.slug}>
                    {question.imageUrl && (
                      <Link href={galleryHref}>
                        {/* Fit all images within 4:3 aspect ratio box*/}
                        <a
                          style={{ paddingBottom: "75%", position: "relative" }}
                        >
                          <Image
                            src={question.imageUrl}
                            layout="fill"
                            objectFit="contain"
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
        </div>
      </div>
      <div
        className={classnames("container-fluid py-4", ContainerStyle.container)}
      >
        <div className="container-md">
          <Row>
            <Column>
              <h1 className="text-white display-3 pb-4">
                Try our demo course!
              </h1>
              <p className="text-white">
                Too busy to schedule a demo? You can test our demo course on
                your own, before you request your course space.
              </p>
              <div className="row justify-content-center my-4">
                <div className="col-md-12 text-center">
                  <Link href="https://www.prairielearn.org/pl/course_instance/128605">
                    <a className="btn btn-light btn-lg">
                      Test our demo course!
                    </a>
                  </Link>
                </div>
              </div>
            </Column>
          </Row>
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

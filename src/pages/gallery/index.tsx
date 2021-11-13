import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";

import { HomepageHeading } from "../../components/HomepageHeading";
import { PageBanner } from "../../components/Banner";
import { DemoCourseAction } from "../../components/DemoCourse";
import { ButtonToPage } from "../../components/ButtonToPage";

import { getQuestions } from "../../lib/gallery/questions";
import { getAssessments } from "../../lib/gallery/assessments";

import styles from "./index.module.scss";

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
        <title>Gallery | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Gallery"
        text="Explore all the functionality PrairieLearn has to offer"
      />

      <div className={classnames("container-fluid py-4 my-5")}>
        <div className="container-md">
          <div className="row">
            <div
              className="col-md-6 order-2 pt-4
            "
            >
              <Image src={assessmentImage} />
            </div>
            <div className="col-md-6 order-1">
              <HomepageHeading>Assessments</HomepageHeading>
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
              <ButtonToPage
                text="View Assessment Features"
                page="/assessments"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <div className="row">
            <div
              className="col-md-6 order-2 pt-4
            "
            >
              <Image src={questionImage} />
              <ButtonToPage
                text="Learn about PrairieLearn questions"
                page="/gallery/elementIntro"
              />
            </div>
            <div className="col-md-6 order-1">
              <HomepageHeading>Questions</HomepageHeading>
              <p>
                Questions are the fundamental unit of content in PrairieLearn.
                While questions can be completely static, the key feature of
                PrairieLearn questions is the ability to generate, display, and
                grade many unique variants of the same base question.
              </p>
              <p>
                <strong> Write it once, use many times!</strong> Since questions
                are defined as code, they can be reused in many future
                assessment.s And students can keep trying new variants of
                difficult problems until they&apos;ve mastered the topic—no need
                for you to manually write new questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="my-3">
            <HomepageHeading>Question Galery</HomepageHeading>
            <p>
              Check out this question gallery with example questions that take
              full advantage of the PrairieLearn platform.
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

      <DemoCourseAction
        title="Try our demo course!"
        text="Explore the demo course to see how this all come together"
        button="Demo course"
      />
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

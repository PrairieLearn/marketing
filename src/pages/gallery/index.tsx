import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";

import { PageHeading } from "../../components/PageHeading";
import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { LinkButton } from "../../components/LinkButton";

import { getQuestions } from "../../lib/gallery/questions";

import styles from "./index.module.scss";
import assessmentImage from "../../lib/images/assessment.png";
import questionImage from "../../lib/images/question.png";

interface Question {
  title: string;
  slug: string;
  summary: string;
  imageUrl?: string;
}

interface GalleryIndexProps {
  questions: Question[];
}

const GalleryIndex: React.FC<GalleryIndexProps> = ({ questions }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Gallery | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Gallery"
        subtitle="Explore all the functionality PrairieLearn has to offer"
      />

      <div className={classnames("container-fluid py-4 my-5")}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image src={assessmentImage} alt="assessment page view" />
            </div>
            <div className="col-md-6 order-1">
              <PageHeading>Assessments</PageHeading>
              <p>
                Assessments are collections of questions that are graded
                together. Use them to create homeworks, exams, quizzes,
                pre-lecture activities, group work, or any other assignment you
                have in your course.
              </p>
              <p>
                An assessment defines point allocations for individual
                questions, rules to control access based on date or user,
                instructions for students, and more!
              </p>
              <LinkButton
                label="View Assessment Features"
                href="/assessments"
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
              <Image src={questionImage} alt="question example" />
              <LinkButton
                label="Learn about PrairieLearn questions"
                href="/gallery/elementIntro"
              />
            </div>
            <div className="col-md-6 order-1">
              <PageHeading>Questions</PageHeading>
              <p>
                Questions are the fundamental unit of content in PrairieLearn.
                While questions can be completely static, the key feature of
                PrairieLearn questions is the ability to generate, display, and
                grade many unique variants of the same base question.
              </p>
              <p>
                <strong> Write it once, use many times!</strong> Since questions
                are defined as code, they can be reused in many future
                assessments. And students can keep trying new variants of
                difficult problems until they&apos;ve mastered the topic—no need
                for you to manually write new questions to give students extra
                practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="my-3">
            <PageHeading>Question Galery</PageHeading>
            <p>
              Check out the question gallery with example questions that take
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
                            alt="question preview image"
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

      <DemoCourseCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
      />
    </React.Fragment>
  );
};

export default GalleryIndex;

export const getStaticProps: GetStaticProps<GalleryIndexProps> = async () => {
  const rawQuestions = await getQuestions();
  const questions = rawQuestions.map(({ title, slug, summary, image }) => ({
    title,
    slug,
    summary,
    imageUrl: image?.url,
  }));

  return {
    props: {
      questions,
    },
  };
};

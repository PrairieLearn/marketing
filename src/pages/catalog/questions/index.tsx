import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { Heading } from "../../../components/Heading";
import { PageBanner } from "../../../components/Banner";
import { BannerCTA } from "../../../components/CallToActionBanner";
import { LinkButton } from "../../../components/LinkButton";
import { getQuestions } from "../../../lib/catalog/questions";

import styles from "./index.module.scss";
import questionImage from "../../../lib/images/question.png";

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
        <title>Questions | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Questions"
        subtitle="Create quality questions from a wide variety of input options"
      />

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 order-2 pt-4">
              <Image
                src={questionImage}
                alt="question example"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <LinkButton
                label="Read more about PrairieLearn questions"
                href="/catalog/questions/question-intro"
              />
            </div>
            <div className="col-md-6 order-1">
              <Heading>Questions</Heading>
              <p>
                Questions are the fundamental unit of content in PrairieLearn.
                While questions can be completely static, the key feature of
                PrairieLearn questions is the ability to generate, display, and
                grade many unique variants of the same base question.
              </p>
              <p>
                {" "}
                <strong> Write it once, use many times!</strong>{" "}
              </p>
              <p>
                Since questions are defined as code, they can be reused in many
                future assessments. And students can keep trying new variants of
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
            <Heading>Question Catalog</Heading>
            <p>
              Check out the question catalog with example questions that take
              full advantage of the PrairieLearn platform.
            </p>

            <div className={classnames(styles.grid)}>
              {questions.map((question) => {
                const galleryHref = `/catalog/questions/${question.slug}`;
                return (
                  <article className="card" key={question.slug}>
                    {question.imageUrl && (
                      <Link
                        href={galleryHref}
                        style={{ paddingBottom: "75%", position: "relative" }}
                      >
                        {/* Fit all images within 4:3 aspect ratio box*/}

                        <Image
                          src={question.imageUrl}
                          alt="question preview image"
                          fill
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </Link>
                    )}
                    <div className="card-body">
                      <Link href={galleryHref}>
                        <h3 className="card-title h5">{question.title}</h3>
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

      <BannerCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
        href="https://us.prairielearn.com/pl/course_instance/4970"
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

import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";
import { getQuestions } from "../../lib/gallery/questions";

import styles from "./index.module.scss";
import Stack from "../../components/Stack";


interface Question {
  title: string;
  slug: string;
  summary: string;
  imageUrl?: string;
}

interface GalleryIndexProps {
  questions: Question[];
}

const GalleryIndex: React.FC<GalleryIndexProps> = ({
  questions,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Research | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Research</h1>
          <p className="lead">
            Educational studies using PrairieLearn data
          </p>
        </div>

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

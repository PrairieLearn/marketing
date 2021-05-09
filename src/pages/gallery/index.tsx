import React from "react";
import classnames from "classnames";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import path from "path";
import fs from "fs-extra";

import Image from "../../components/Image";
import { getMarkdownPaths, loadMarkdownFile } from "../../lib/gallery/data";
import { copyImageToPublicDir, ImageInfo } from "../../lib/images";
import { getAssessments } from "../../lib/demo/data";

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
          If you're new to PrairieLearn, you should check out the{" "}
          <Link href="/gallery/intro">
            <a>introduction to PrairieLearn questions</a>
          </Link>{" "}
          to learn the key concepts used throughout these examples and all
          PrairieLearn questions.
        </p>
        <p>
          Once you're familiar with the basics, check out the below questions to
          see some examples of questions that take full advantage of the
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
  const markdownPaths = await getMarkdownPaths();
  const markdownFiles = (
    await Promise.all(
      markdownPaths.map((markdownPath) => loadMarkdownFile(markdownPath))
    )
  ).filter((markdownFile) => markdownFile.showOnIndex);

  // Each Markdown file *may* have an adjacent `galleryImage.png` file. If it
  // does, copy it to the public dir and attach its URL to the index entry.
  const images: { [slug: string]: ImageInfo } = {};
  await Promise.all(
    markdownFiles.map(async (markdownFile) => {
      const baseDir = path.parse(markdownFile.path).dir;
      const imagePath = path.join(baseDir, "galleryImage.png");
      if (await fs.pathExists(imagePath)) {
        images[markdownFile.slug] = await copyImageToPublicDir(imagePath);
      }
    })
  );

  // Sort the files by slug
  const sortedMarkdownFiles = markdownFiles.sort((a, b) =>
    a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
  );

  // Get assessments and filter out only the props we need on this page
  const rawAssessments = await getAssessments();
  const assessments = rawAssessments.map(({ title, slug, summary }) => ({
    title,
    slug,
    summary,
  }));

  return {
    props: {
      questions: sortedMarkdownFiles.map((markdownFile) => {
        const image = images[markdownFile.slug];
        return {
          title: markdownFile.title,
          slug: markdownFile.slug,
          summary: markdownFile.summary,
          imageUrl: image?.url ?? null,
        };
      }),
      assessments,
    },
  };
};

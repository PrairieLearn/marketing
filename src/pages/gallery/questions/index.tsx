import React from "react";
import classnames from "classnames";
import Link from "next/link";
import Head from "next/head";
import Image, { ImageProps } from "next/image";

import { Heading } from "../../../components/Heading";
import { PageBanner } from "../../../components/Banner";
import { BannerCTA } from "../../../components/CallToActionBanner";
import { LinkButton } from "../../../components/LinkButton";

import styles from "./index.module.scss";
import questionImage from "../../../lib/images/question.png";

{
  /* Template Question Images */
}
import selectBird from "../../../lib/images/questionTemplates/selectBird.png";
import selectRandomNumber from "../../../lib/images/questionTemplates/selectRandomNumber.png";
import selectRainbowColor from "../../../lib/images/questionTemplates/selectRainbowColor.png";
import selectPlanet from "../../../lib/images/questionTemplates/selectPlanet.png";
import selectTrueFalse from "../../../lib/images/questionTemplates/selectTrueFalse.png";
import selectEven from "../../../lib/images/questionTemplates/selectEven.png";
import randomEquation from "../../../lib/images/questionTemplates/randomEquation.png";
import fixedEquation from "../../../lib/images/questionTemplates/fixedEquation.png";
import convertAngle from "../../../lib/images/questionTemplates/convertAngle.png";
import dynamicImage from "../../../lib/images/questionTemplates/dynamicImage.png";
import graphMatrix from "../../../lib/images/questionTemplates/graphMatrix.png";
import productMatrices from "../../../lib/images/questionTemplates/productMatrices.png";
import derivativeSymbolic from "../../../lib/images/questionTemplates/derivativeSymbolic.png";
import inputText from "../../../lib/images/questionTemplates/inputText.png";

interface TemplateCardProps {
  title: string;
  href: string;
  image: ImageProps["src"];
  children: React.ReactNode;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  href,
  image,
  children,
}) => {
  return (
    <article className="card border-secondary overflow-hidden">
      <Link href={href} className="position-relative">
        <Image
          src={image}
          alt={title}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            aspectRatio: "5 / 3",
          }}
        />
      </Link>
      <div className="card-body">
        <Link href={href}>
          <h3 className="card-title h5">{title}</h3>
        </Link>
        {children}
      </div>
    </article>
  );
};

export default function QuestionTemplate() {
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
                href="/gallery/questions/question-intro"
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

      <div className={classnames("container-fluid py-2", styles.container)}>
        <div className="container-md">
          <div className="my-3">
            <Heading>Question templates</Heading>
            <p>
              Check out these template questions - they can be great resources
              when creating your own questions.
            </p>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <Heading>Multiple-choice and checkbox answers</Heading>
          </div>
          <div className={styles.grid}>
            <TemplateCard
              title="Numerical answers"
              href=""
              image={selectRandomNumber}
            >
              Correct answer and distractors are computed based on randomized
              input parameters.
            </TemplateCard>
            <TemplateCard
              title="Text answers"
              href=""
              image={selectRainbowColor}
            >
              Correct answer and distractors are randomly selected from a list
              of several correct answers and distractors.
            </TemplateCard>
            <TemplateCard title="Images answers" href="" image={selectBird}>
              Correct answer and distractors are randomly selected from a list
              of images.
            </TemplateCard>
            <TemplateCard
              title="Randomized prompt"
              href=""
              image={selectPlanet}
            >
              Correct answer and distractors are randomly selected from a list
              which is dynamically generated based on the choice of randomized
              prompt.
            </TemplateCard>
            <TemplateCard
              title="True/False answers"
              href=""
              image={selectTrueFalse}
            >
              Randomly selects the prompt from a list and its corresponding True
              / False answer. Ensures the True option always appears first.
            </TemplateCard>
            <TemplateCard
              title="Multiple select answers"
              href=""
              image={selectEven}
            >
              Randomly selects the question prompt from and its corresponding
              correct/incorrect answers.
            </TemplateCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <Heading>Numerical Answers</Heading>
          </div>
          <div className={styles.grid}>
            <TemplateCard
              title="Randomized parameters"
              href=""
              image={fixedEquation}
            >
              Computes the numerical value for a fixed mathematical expression
              given two randomized input parameters.
            </TemplateCard>
            <TemplateCard
              title="Randomized prompt"
              href=""
              image={randomEquation}
            >
              Computes the numerical value for a mathematical expression
              randomly generated from a list of options, given two randomized
              input parameters.
            </TemplateCard>
            <TemplateCard title="Integer answer" href="" image={convertAngle}>
              Computes the answer, expected to be an integer, given a randomized
              parameter.
            </TemplateCard>
            <TemplateCard title="Randomized image" href="" image={dynamicImage}>
              Computes the answer, expected to be an integer, given a
              dynamically generated image from randomized input parameters.
            </TemplateCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <Heading>Matrix answers</Heading>
          </div>
          <div className={styles.grid}>
            <TemplateCard title="Matrix components" href="" image={graphMatrix}>
              Dynamically generates a randomized graph with nodes and edges, and
              the answer is the corresponding adjacency matrix.
            </TemplateCard>
            <TemplateCard
              title="Matrix as code"
              href=""
              image={productMatrices}
            >
              Generates two randomized matrices and provides them as input in
              both Matlab and Python format. The computed answer can also be
              provided in either formats.
            </TemplateCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <Heading>Text answers</Heading>
          </div>
          <div className={styles.grid}>
            <TemplateCard title="Randomized string" href="" image={inputText}>
              Prompt and correct answer are randomly selected from a list of
              options. Correct answer is checked as a string, with all
              whitespaces removed.
            </TemplateCard>
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <div className="row">
            <Heading>Symbolic expressions</Heading>
          </div>
          <div className={styles.grid}>
            <TemplateCard
              title="Symbolic answer"
              href=""
              image={derivativeSymbolic}
            >
              Evaluates if a symbolic submission of a mathematical expression
              matches the correct answer, which is generated at random.
            </TemplateCard>
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
}

import React from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header } from "../components/Header";
import { HomepageHero } from "../components/HomepageHero";
import { HomepageHeading } from "../components/HomepageHeading";
import { ExampleEditor } from "../components/ExampleEditor";
import { ExampleQuestion } from "../components/ExampleQuestion";

const DEMO_PYTHON_GRADER = `
def grade(data):
  # pass
`.trim();

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HomepageHero />
      <div className="container">
        <HomepageHeading>Easy to get started</HomepageHeading>
        <p>
          Support for a broad variety of questions comes built-in, so you can
          hit the ground running.
        </p>
        <HomepageHeading>Unlimited flexibility</HomepageHeading>
        <p>
          Or take advantage of autograded code questions with in-browser IDEs.
        </p>
        <div className="row">
          <div className="col-md-4">
            <ExampleQuestion />
          </div>
          <div className="col-md-8">
            <HomepageHeading>Write once, use forever</HomepageHeading>
            <p>
              Once a question has been defined in code, it can be reused in any
              future assessment. And students can keep trying new variants of
              difficult questions until they've mastered the topic—without the
              need to manually write new questions.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <HomepageHeading>Save time grading</HomepageHeading>
            <p>
              From simple multiple-choice questions to free-body diagrams to
              code, questions grade themselves, so instructors can focus on the
              important things.
            </p>
          </div>
          <div className="col-md-6">
            <ExampleEditor
              filename="server.py"
              language="python"
              code={DEMO_PYTHON_GRADER}
            />
          </div>
        </div>
        <HomepageHeading>Trusted by the best</HomepageHeading>
        <div className="row">
          <div className="col-md-6">
            <p>
              Instructors at top universities in the United States and Canada
              have used PrairieLearn to teach the next generation of engineers,
              scientists, and businesspeople.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <div className="small text-muted">Students</div>
            <div className="display-5 lh-1">40,000</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="small text-muted">Courses</div>
            <div className="display-5 lh-1">300</div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
}

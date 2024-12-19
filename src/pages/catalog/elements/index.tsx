import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

import { PageBanner } from "../../../components/Banner";
import { Heading } from "../../../components/Heading";

import styles from "./index.module.scss";
import oerTruthTable from "../../../lib/images/oer-element-truthtable.png";
import oerChemInput from "../../../lib/images/oer-element-cheminput.png";

interface SharedElementCardProps {
  image: ImageProps["src"];
  title: string;
  href: string;
  owner: ReactNode;
  github?: string;
}

const SharedElementCard: React.FC<SharedElementCardProps> = ({
  image,
  title,
  href,
  owner,
  github,
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
        <p className="mb-1">
          <strong>Created by:</strong> {owner}
        </p>
        {github && (
          <p className="mb-1">
            <Link href={github}>Access on GitHub</Link>
          </p>
        )}
      </div>
    </article>
  );
};

export default function Courses() {
  return (
    <React.Fragment>
      <Head>
        <title>OER Question Elements | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Open Educational Resources (OER): Question Elements"
        subtitle="A catalog of building blocks that allow you to create richer questions"
      />

      <div className="container-fluid my-3">
        <div className="container-md">
          <div className="alert alert-secondary mb-0">
            The shared question elements on this page are provided as-is and not
            maintained by PrairieLearn. They are only recommended for
            instructors who are already familiar with the platform. To use an
            element, you will have to access its Github repository and manually
            copy the element into your course.
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <Heading>Publicly Shared Elements</Heading>
          <div className="row">
            <p>
              This catalog contains question elements that have been created and
              shared by students and instructors from various universities. You
              can try them out by clicking the link to a demo assessment on
              PrairieLearn. The assessment also contains instructions how you
              can copy an element into your course if you like it. You can find
              the link to each element&apos;s Github repository below.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <div className={styles.grid}>
            <SharedElementCard
              image={oerTruthTable}
              title="Truth Table"
              href="https://us.prairielearn.com/pl/course_instance/169837/assessment/2489207"
              github="https://github.com/PrairieLearn/pl-oer-element-truthtable"
              owner={
                <span>
                  <a href="https://github.com/paiz3">Pai Zheng</a> and{" "}
                  <a href="https://github.com/Mayojet">Yujie Miao</a>
                </span>
              }
            />
            <SharedElementCard
              image={oerChemInput}
              title="Chemistry Input"
              href="https://us.prairielearn.com/pl/course_instance/169804/assessment/2489141"
              github="https://github.com/PrairieLearn/pl-oer-element-cheminput"
              owner={
                <span>
                  <a href="https://github.com/ananyab3">Ananya Barman</a>,{" "}
                  <a href="https://github.com/jayshri99">Jayshri Ganguli</a>,
                  and{" "}
                  <a href="https://github.com/ShengyuanWang">Shengyuan Wang</a>
                </span>
              }
            />
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-md">
          <h2 className="h4">License</h2>
          <p>All content here is made made available under an open license.</p>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="container-md">
          <h2 className="h4">Contribute to this page</h2>
          <p>
            If you want to share your PrairieLearn element on this page, please
            contact us at{" "}
            <a href="mailto:hello@prairielearn.com">hello@prairielearn.com</a>.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import classnames from "classnames";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";

import styles from "./index.module.scss";

import asee2023 from "../../lib/images/blog/asee2023-booth.jpg";
import nsf from "../../lib/images/logos/NSF_Official_logo_High_Res_1200ppi.png";



interface NewsCardProps {
  date: string;
  image: ImageProps["src"];
  title: string;
  href: string;
  children: React.ReactNode;
}

const NewsCard: React.FC<NewsCardProps> = ({
  date,
  image,
  title,
  href,
  children,
}) => {
  return (
    <article className="card border-secondary overflow-hidden">
      <Link href={href} className="position-relative">
        <Image
          src={image}
          alt={title}
          style={{
            // objectFit: "contain",
            width: "100%",
            height: "100%",
            // aspectRatio: "5 / 3",
          }}
        />
      </Link>
      <div className="card-body">
        <p className="mb-1">
          <strong>{date}</strong> 
        </p>     
        <Link
          href={href}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Heading>{title}</Heading>       
        </Link>
        {children}
      </div>
    </article>
  );
};

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Blog"
        subtitle="Get updates about new features, publications, conference presence and more!"
      />

      <div className={classnames("container-fluid my-5")}>
        <div className="container-md">
          <div className={styles.grid}>
            <NewsCard
              date="August 8-10, 2023"
              image={asee2023}
              title="ICER 2023"
              href=" "
            >
              <p className="mb-0">
                Read about the research studies using PrairieLearn data presented at the conference. 
              </p>
            </NewsCard>
            <NewsCard
              date="August 4, 2023"
              image={nsf}
              title="NSF SBIR Award"
              href=" "
            >
              <p className="mb-0">
                Read about the research studies using PrairieLearn data presented at the conference. 
              </p>
            </NewsCard>
            <NewsCard
              date="June 25-28, 2023"
              image={asee2023}
              title="ASEE 2023"
              href=" "
            >
              <p className="mb-0">
                PrairieLearn Inc. had its first conference booth! We had a great time talking with many educators and attending excellent talks!
              </p>
            </NewsCard> 
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
}

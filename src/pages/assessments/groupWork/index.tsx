import React from "react";
import classnames from "classnames";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import path from "path";

import { getPropsForMarkdownFile } from "../../../lib/markdown";
import { MarkdownPage, MarkdownPageProps } from "../../../lib/markdown-page";

import { PageBanner } from "../../../components/Banner";
import Stack from "../../../components/Stack";
import Image from "../../../components/Image";

import styles from "./index.module.scss";

export default MarkdownPage;

export const getStaticProps: GetStaticProps<MarkdownPageProps> = async () => {
  return {
    props: await getPropsForMarkdownFile(
      path.resolve(
        process.cwd(),
        "src",
        "pages",
        "assessments",
        "groupWork",
        "docs.md"
      )
    ),
  };
};

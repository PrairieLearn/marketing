import { GetStaticProps } from "next";
import path from "path";

import { getPropsForMarkdownFile } from "../../lib/markdown";
import { MarkdownPage, MarkdownPageProps } from "../../lib/markdown-page";

export default MarkdownPage;

export const getStaticProps: GetStaticProps<MarkdownPageProps> = async () => {
  return {
    props: await getPropsForMarkdownFile(
      path.resolve(process.cwd(), "src", "pages", "gallery", "elementIntro.md")
    ),
  };
};

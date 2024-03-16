import nextMdx from "@next/mdx";

import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      rehypeKatex,
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/slack",
        destination:
          "https://join.slack.com/t/prairielearn/shared_invite/zt-13kx0hg6v-uuC3kyt_3iBxjSpyhCbYVw",
        permanent: true,
      },
      {
        source: "/oer",
        destination: "/catalog/oer",
        permanent: true,
      },
      {
        source: "/gallery/questions/:slug*",
        destination: "/catalog/questions/:slug*",
        permanent: true,
      },
      {
        source: "/gallery/courses",
        destination: "/catalog/oer",
        permanent: true,
      },
      {
        source: "/gallery/assessments/:slug*",
        destination: "/catalog/assessments/:slug*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);

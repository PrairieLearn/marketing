import type { NextConfig } from "next";
import nextMdx from "@next/mdx";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: ["remark-math", "remark-gfm", "remark-emoji"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "wrap",
        },
      ],
      "rehype-katex",
    ],
  },
});

const nextConfig: NextConfig = {
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
        destination: "/catalog/questions",
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

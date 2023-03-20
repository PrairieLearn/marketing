import nextMdx from "@next/mdx";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
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
    ];
  },
};

export default withMDX(nextConfig);

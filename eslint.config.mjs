import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    ignores: [
      ".next/**",
      ".yarn/**",
      "out/**",
      "node_modules/**",
      "PrairieLearn/**",
    ],
  },
];

export default config;

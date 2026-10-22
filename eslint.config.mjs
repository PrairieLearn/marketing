import { fixupConfigRules } from "@eslint/compat";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const config = [
  ...fixupConfigRules(nextCoreWebVitals),
  {
    // Next's bundled Babel parser lacks ESLint 10's scope API.
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**", "PrairieLearn/**"],
  },
];

export default config;

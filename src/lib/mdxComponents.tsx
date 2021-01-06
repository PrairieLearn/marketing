import { Components } from "@mdx-js/react";
import { Language } from "prism-react-renderer";

import { CodeBlock } from "../components/CodeBlock";

const mdxComponents: Components = {
  code: ({ children, className }) => {
    const language = className.replace(/language-/, "") as Language;
    return (
      <div className="mb-3">
        <CodeBlock code={children.trim()} language={language} />
      </div>
    );
  },
  pre: ({ children }) => children,
};

export default mdxComponents;

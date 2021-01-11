import React from "react";
import classnames from "classnames";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

import dracula from "prism-react-renderer/themes/dracula";

export interface CodeBlockProps {
  code: string;
  language: Language;
  preRef?: React.Ref<HTMLPreElement>;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  preRef,
}) => {
  return (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classnames(className, "mb-0 p-2")}
          style={style}
          ref={preRef}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

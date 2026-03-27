import React from "react";
import classnames from "classnames";
import { Highlight, Language, themes } from "prism-react-renderer";

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
    <Highlight theme={themes.dracula} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classnames(className, "mb-0 p-3")}
          style={style}
          ref={preRef}
        >
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

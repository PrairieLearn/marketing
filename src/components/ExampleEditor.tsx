import React from "react";
import classnames from "classnames";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

import styles from "./ExampleEditor.module.scss";

export interface ExampleEditorProps {
  filename: string;
  code: string;
  language: Language;
}

export const ExampleEditor: React.FC<ExampleEditorProps> = ({
  filename,
  code,
  language,
}) => (
  <div className="rounded overflow-hidden">
    <div className={classnames(styles.header, "text-white p-2")}>
      {filename}
    </div>
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classnames(className, "mb-0 p-2")} style={style}>
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
  </div>
);

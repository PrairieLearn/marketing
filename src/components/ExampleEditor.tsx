import React from "react";
import classnames from "classnames";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

import styles from "./ExampleEditor.module.scss";

export interface File {
  filename: string;
  language: Language;
  code: string;
}

export interface ExampleEditorProps {
  files: File[];
}

export const ExampleEditor: React.FC<ExampleEditorProps> = ({ files }) => {
  const preRef = React.useRef(null);
  const singleFile = files.length === 1;
  const [selectedFileIndex, setSelectedFileIndex] = React.useState(0);
  const file = files[selectedFileIndex];

  React.useEffect(() => {
    if (preRef?.current?.scrollLeft) {
      preRef.current.scrollLeft = 0;
    }
  }, [selectedFileIndex, preRef.current]);

  return (
    <div className="card border-0 overflow-hidden">
      <div className={classnames(styles.header, "card-header text-white")}>
        {singleFile && file.filename}
        {!singleFile && (
          <ul className="list-inline mb-0">
            {files.map((file, index) => {
              const active = selectedFileIndex === index;
              return (
                <li className="list-inline-item">
                  <button
                    className={classnames("btn", {
                      "btn-light": active,
                      "btn-outline-light": !active,
                    })}
                    aria-current={active ? "true" : "false"}
                    onClick={() => setSelectedFileIndex(index)}
                  >
                    {file.filename}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Highlight
        {...defaultProps}
        theme={dracula}
        code={file.code}
        language={file.language}
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
    </div>
  );
};

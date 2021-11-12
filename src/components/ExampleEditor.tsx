import React from "react";
import classnames from "classnames";
import { Language } from "prism-react-renderer";

import { CodeBlock } from "./CodeBlock";

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
  const preRef = React.useRef<HTMLPreElement | null>(null);
  const singleFile = files.length === 1;
  const [selectedFileIndex, setSelectedFileIndex] = React.useState(0);
  const file = files[selectedFileIndex];

  React.useEffect(() => {
    if (preRef?.current?.scrollLeft) {
      preRef.current.scrollLeft = 0;
    }
  }, [selectedFileIndex]);

  return (
    <div className="card border-0 overflow-hidden shadow">
      <div className={classnames(styles.header, "card-header")}>
        {singleFile && file.filename}
        {!singleFile && (
          <ul className="list-inline mb-0">
            {files.map((file, index) => {
              const active = selectedFileIndex === index;
              return (
                <li className="list-inline-item" key={file.filename}>
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
      <CodeBlock code={file.code} language={file.language} preRef={preRef} />
    </div>
  );
};

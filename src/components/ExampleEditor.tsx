import React from "react";
import classnames from "classnames";

import styles from "./ExampleEditor.module.scss";

export interface ExampleEditorProps {
  filename: string;
}

export const ExampleEditor: React.FC<ExampleEditorProps> = ({ filename }) => (
  <div className="rounded overflow-hidden">
    <div className={classnames(styles.header, "text-white p-2")}>
      {filename}
    </div>
    <div className={classnames(styles.body)}>testing this out...</div>
  </div>
);

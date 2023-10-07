import React from "react";
import classnames from "classnames";

import styles from "./Heading.module.scss";

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return (
    <h2 className={classnames(styles.heading, "mb-3 h2", className)}>
      {children}
    </h2>
  );
};

import React from "react";
import classnames from "classnames";

import styles from "./Heading.module.scss";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, className }) => (
  <h2 className={classnames(styles.heading, "mb-3 h2", className)}>
    {children}
  </h2>
);

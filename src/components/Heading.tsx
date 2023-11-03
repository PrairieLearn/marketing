import React from "react";
import classnames from "classnames";

import styles from "./Heading.module.scss";

interface HeadingProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  id,
  children,
}) => {
  return (
    <h2 className={classnames(styles.heading, "mb-3 h2", className)} id={id}>
      {children}
    </h2>
  );
};

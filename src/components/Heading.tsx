import React from "react";
import classnames from "classnames";

import styles from "./Heading.module.scss";

interface HeadingProps {
  className?: string;
  id?: string;
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  id,
  level = 2,
  children,
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Component
      className={classnames(styles.heading, "mb-3", `h${level}`, className)}
      id={id}
    >
      {children}
    </Component>
  );
};

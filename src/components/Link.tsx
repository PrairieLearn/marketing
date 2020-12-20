import React from "react";
import classname from "classnames";

import styles from "./Link.module.scss";

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, className, children }) => (
  <a href={href} className={classname(styles.link, className)}>
    {children}
  </a>
);

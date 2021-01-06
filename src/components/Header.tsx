import React from "react";
import classnames from "classnames";
import Link from "next/link";

import styles from "./Header.module.scss";

export const Header: React.FC = ({ children }) => {
  return (
    <nav
      className={classnames(
        "navbar navbar-expand-lg navbar-dark navbar-primary",
        styles.header
      )}
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">PrairieLearn</a>
        </Link>
      </div>
    </nav>
  );
};

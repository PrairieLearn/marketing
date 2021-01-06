import React from "react";
import classnames from "classnames";
import Link from "next/link";

import styles from "./Header.module.scss";
import NavLink from "./NavLink";

export const Header: React.FC = () => {
  return (
    <nav
      className={classnames(
        "navbar navbar-expand-sm navbar-dark navbar-primary",
        styles.header
      )}
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">PrairieLearn</a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink href="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import NavLink from "./NavLink";

export const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  // Collapse the nav when the user navigates to a different page
  const { pathname } = useRouter();
  React.useEffect(() => {
    setCollapsed(true);
  }, [pathname]);

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
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbar"
          aria-expanded={collapsed ? "false" : "true"}
          aria-label="Toggle navigation"
          onClick={() => setCollapsed((collapsed) => !collapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classnames("navbar-collapse", { collapse: collapsed })}
          id="navbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink href="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/demo">Demo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

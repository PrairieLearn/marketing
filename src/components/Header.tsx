import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import NavLink from "./NavLink";
import Image from "../components/Image";
import NextImage from "next/image";

import grassWhite from "../lib/images/grass-white.png";
import flowerWhite from "../lib/images/flower-white.png";
import flowerYellow from "../lib/images/flower-yellow.png";

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
          <a className="navbar-brand">
            <NextImage src={grassWhite} width={24} height={24} alt="logo" />
            PrairieLearn
          </a>
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

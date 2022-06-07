import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavDropdown } from "react-bootstrap";

import styles from "./Header.module.scss";

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  console.log(href, children);
  const { asPath } = useRouter();
  const active = asPath.startsWith(href);
  const current = asPath === href;
  return (
    <Link href={href}>
      <a
        className={classnames("nav-link", styles["nav-link"], {
          "fw-bold": active,
          [styles.active]: active,
        })}
        aria-current={current ? "page" : undefined}
      >
        {children}
      </a>
    </Link>
  );
};

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
            <NavDropdown title="Gallery">
              <Link href="/gallery/assessments" passHref>
                <NavDropdown.Item>Assessments</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <li className="nav-item">
              <NavLink href="/gallery/assessments">Assessments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/gallery/questions">Questions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/research">Case Studies</NavLink>
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

import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavDropdown } from "react-bootstrap";

import styles from "./Header.module.scss";

function useIsActive(href: string): boolean {
  const { asPath } = useRouter();
  return asPath.startsWith(href);
}

function useIsCurrent(href: string): boolean {
  const { asPath } = useRouter();
  return asPath === href;
}

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const active = useIsActive(href);
  const current = useIsCurrent(href);
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

const NavDropdownItem: React.FC<NavLinkProps> = ({ href, children }) => {
  const active = useIsActive(href);
  const current = useIsCurrent(href);
  return (
    <Link href={href} passHref>
      <NavDropdown.Item
        className={classnames({ "fw-bold": active })}
        aria-current={current ? "page" : undefined}
      >
        {children}
      </NavDropdown.Item>
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
            <NavDropdown
              title="Gallery"
              // Make the dropdown label bold when the user is on any gallery page.
              className={classnames({ "fw-bold": useIsActive("/gallery") })}
            >
              <NavDropdownItem href="/gallery/questions">
                Questions
              </NavDropdownItem>
              <NavDropdownItem href="/gallery/assessments">
                Assessments
              </NavDropdownItem>
              <NavDropdownItem href="/gallery/courses">Courses</NavDropdownItem>
            </NavDropdown>
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

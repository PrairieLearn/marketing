import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dropdown, NavDropdown, NavItem, NavLink } from "react-bootstrap";

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

const RouterNavLink: React.FC<NavLinkProps> = ({ href, children }) => {
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

import Image from "./Image";
import logo from "../lib/images/flower-white.png";

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
            <Image src={logo} width={24} height={24} alt="PrairieLearn logo" />
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
              <RouterNavLink href="/about">About</RouterNavLink>
            </li>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle
                as={NavLink}
                className={classnames(styles["nav-link"], {
                  [`fw-bold ${styles.active}`]: useIsActive("/gallery"),
                })}
              >
                Gallery
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavDropdownItem href="/gallery/questions">
                  Questions
                </NavDropdownItem>
                <NavDropdownItem href="/gallery/assessments">
                  Assessments
                </NavDropdownItem>
                <NavDropdownItem href="/gallery/courses">
                  Courses
                </NavDropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <li className="nav-item">
              <RouterNavLink href="/research">Case Studies</RouterNavLink>
            </li>
            <li className="nav-item">
              <RouterNavLink href="/pricing">Pricing</RouterNavLink>
            </li>
            <li className="nav-item">
              <RouterNavLink href="/contact">Contact</RouterNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

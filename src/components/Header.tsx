import React from "react";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Dropdown,
  DropdownButton,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";

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
  children: React.ReactNode;
}

const RouterNavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const active = useIsActive(href);
  const current = useIsCurrent(href);
  return (
    <Link
      href={href}
      className={classnames("nav-link", styles["nav-link"], {
        "fw-bold": active,
        [styles.active]: active,
      })}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

const NavDropdownItem: React.FC<NavLinkProps> = ({ href, children }) => {
  const active = useIsActive(href);
  const current = useIsCurrent(href);
  return (
    <NavDropdown.Item
      className={classnames({ "fw-bold": active })}
      aria-current={current ? "page" : undefined}
      as={Link}
      href={href}
    >
      {children}
    </NavDropdown.Item>
  );
};

import logo from "../lib/images/PL-logo-white.svg";

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
        "navbar navbar-expand-sm py-5 navbar-dark navbar-primary",
        styles.header
      )}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src={logo}
            height={60}
            alt="PrairieLearn logo"
            style={{
              width: "auto",
            }}
          />
        </Link>
        <div className="d-flex flex-row">
          <DropdownButton
            id="login-dropdown-mobile"
            title="Login"
            variant="light"
            className="d-sm-none me-2"
          >
            <Dropdown.Item href="https://us.prairielearn.com/pl/login">
              Main <span className="text-muted">(us.prairielearn.com)</span>
            </Dropdown.Item>
            <Dropdown.Item href="https://ca.prairielearn.com/pl/login">
              Canada <span className="text-muted">(ca.prairielearn.com)</span>
            </Dropdown.Item>
          </DropdownButton>
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
        </div>
        <div
          className={classnames("navbar-collapse", { collapse: collapsed })}
          id="navbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <RouterNavLink href="/product">Product</RouterNavLink>
            </li>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle
                as={NavLink}
                className={classnames(styles["nav-link"], {
                  [`fw-bold ${styles.active}`]: useIsActive("/gallery"),
                })}
              >
                Catalog
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
                <NavDropdownItem href="/oer">
                  OER
                </NavDropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle
                as={NavLink}
                className={classnames(styles["nav-link"], {
                  [`fw-bold ${styles.active}`]: useIsActive("/gallery"),
                })}
              >
                Info Center
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavDropdownItem href="/about">
                  About Us
                </NavDropdownItem>
                <NavDropdownItem href="/research">
                  Research
                </NavDropdownItem>
                <NavDropdownItem href="/blog">
                  Blog
                </NavDropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <li className="nav-item">
              <RouterNavLink href="/contact">Support</RouterNavLink>
            </li>
            <li className="nav-item">
              <RouterNavLink href="/pricing">Pricing</RouterNavLink>
            </li>
            <DropdownButton
              id="login-dropdown-desktop"
              title="Login"
              variant="light"
              className="d-none d-sm-inline-block"
            >
              <Dropdown.Item href="https://us.prairielearn.com/pl/login">
                Main <span className="text-muted">(us.prairielearn.com)</span>
              </Dropdown.Item>
              <Dropdown.Item href="https://ca.prairielearn.com/pl/login">
                Canada <span className="text-muted">(ca.prairielearn.com)</span>
              </Dropdown.Item>
            </DropdownButton>
          </ul>
        </div>
      </div>
    </nav>
  );
};

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
import { RequestCourseModal } from "../components/RequestCourseModal";

import styles from "./Header.module.scss";

function useIsActive(href: string | string[], exact: boolean): boolean {
  const { asPath } = useRouter();
  const hrefs = Array.isArray(href) ? href : [href];
  return hrefs.some((href) =>
    exact ? asPath === href : asPath.startsWith(href)
  );
}

function useIsCurrent(href: string): boolean {
  const { asPath } = useRouter();
  return asPath === href;
}

interface NavLinkProps {
  href: string;
  activeMatchExactHref?: boolean;
  children: React.ReactNode;
}

const RouterNavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const active = useIsActive(href, false);
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

const NavDropdownItem: React.FC<NavLinkProps> = ({
  href,
  children,
  activeMatchExactHref = false,
}) => {
  const active = useIsActive(href, activeMatchExactHref);
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

  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);

  // Collapse the nav when the user navigates to a different page
  const { pathname } = useRouter();
  React.useEffect(() => {
    setCollapsed(true);
  }, [pathname]);

  return (
    <React.Fragment>
      <div className={classnames("container-fluid pt-4", styles.header)}>
        <div className="container-md text-end">
          <button
            className="btn btn-light btn-md me-3 "
            onClick={() => setShowRequestCourseModal(true)}
          >
            Free sign up
          </button>
          <DropdownButton
            id="login-dropdown-desktop"
            title="Login"
            variant="light"
            className="d-inline-block"
          >
            <Dropdown.Item href="https://us.prairielearn.com/pl/login">
              Main <span className="text-muted">(us.prairielearn.com)</span>
            </Dropdown.Item>
            <Dropdown.Item href="https://ca.prairielearn.com/pl/login">
              Canada <span className="text-muted">(ca.prairielearn.com)</span>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
      <nav
        className={classnames(
          "navbar navbar-expand-md navbar-dark navbar-primary",
          styles.header
        )}
      >
        <div className="container-fluid container-md">
          <Link href="/" className="navbar-brand">
            <Image
              src={logo}
              height={60}
              alt="PrairieLearn"
              className={styles.logo}
            />
          </Link>
          <div className="d-flex flex-row">
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
              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className={classnames(styles["nav-link"], {
                    [`fw-bold ${styles.active}`]: useIsActive(
                      ["/products"],
                      false
                    ),
                  })}
                >
                  Product
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <NavDropdownItem href="/" activeMatchExactHref>
                    PrairieLearn
                  </NavDropdownItem>
                  <NavDropdownItem href="/products/prairietest">
                    PrairieTest
                  </NavDropdownItem>
                  <NavDropdownItem href="/products/testing-center">
                    Testing Centers
                  </NavDropdownItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className={classnames(styles["nav-link"], {
                    [`fw-bold ${styles.active}`]: useIsActive(
                      ["/gallery", "/oer"],
                      false
                    ),
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
                  <NavDropdownItem href="/oer">OER</NavDropdownItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className={classnames(styles["nav-link"], {
                    [`fw-bold ${styles.active}`]: useIsActive(
                      ["/about", "/research"],
                      false
                    ),
                  })}
                >
                  About
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <NavDropdownItem href="/about">About Us</NavDropdownItem>
                  <NavDropdownItem href="/research">Research</NavDropdownItem>
                </Dropdown.Menu>
              </Dropdown>
              <li className="nav-item">
                <RouterNavLink href="/support">Support</RouterNavLink>
              </li>
              <li className="nav-item">
                <RouterNavLink href="/pricing">Pricing</RouterNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
};

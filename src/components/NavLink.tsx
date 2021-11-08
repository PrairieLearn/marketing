import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

import styles from "./NavLink.module.scss";

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const { asPath } = useRouter();
  const active = asPath.startsWith(href);
  const current = asPath === href;
  return (
    <Link href={href}>
      <a
        className={classnames(
          styles['nav-link'],
          styles['nav-item'],
          { "active fw-bold ": active }
        )}
        aria-current={current ? "page" : undefined}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;

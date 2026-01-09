import React from "react";
import classnames from "classnames";

import styles from "./Banner.module.scss";
import Link from "next/link";

export interface PageBannerProps {
  backHref?: string;
  backText?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  backHref,
  backText,
  title,
  subtitle,
  children,
}) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <div className="row">
        <div className="col">
          {backHref && backText && (
            <div className="mb-3">
              <Link
                href={backHref}
                className={classnames(
                  "link-light text-decoration-none",
                  styles["back-link"],
                )}
              >
                ← {backText}
              </Link>
            </div>
          )}
          <h1 className="text-white display-6">
            {title}
          </h1>
          {subtitle && <p className="text-white mt-3 lead">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  </div>
);

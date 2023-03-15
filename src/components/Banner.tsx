import React from "react";
import classnames from "classnames";

import styles from "./Banner.module.scss";

export interface PageBannerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  children,
}) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <div className="row">
        <div className="col">
          <h1 className="text-white display-3">{title}</h1>
          {subtitle && <p className="text-white mt-4 fs-3">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  </div>
);

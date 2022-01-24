import React from "react";
import classnames from "classnames";

import styles from "./Banner.module.scss";

export interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <div className="row">
        <div className="col">
          <h1 className="text-white display-3">{title}</h1>
          {subtitle && <p className="text-white  mt-4 fs-3">{subtitle}</p>}
        </div>
      </div>
    </div>
  </div>
);

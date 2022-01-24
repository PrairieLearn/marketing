import React from "react";
import classnames from "classnames";

import styles from "./Banner.module.scss";

const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

export interface PageBannerProps {
  title: string;
  text: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, text }) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <Row>
        <Column>
          <h1 className="text-white display-3">{title}</h1>
          <p className="text-white  mt-4 fs-3">{text}</p>
        </Column>
      </Row>
    </div>
  </div>
);

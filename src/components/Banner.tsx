import React from "react";
import classnames from "classnames";

import Image from "./Image";
//import logo from "../lib/images/flower-white.png";
import logo from "../lib/images/grass-white.png";
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
          {subtitle && <p className="text-white mt-4 fs-3">{subtitle}</p>}
        </div>
      </div>
    </div>
  </div>
);

export interface HomePageBannerProps {
  subtitle?: string;
}

export const HomePageBanner: React.FC<HomePageBannerProps> = ({ subtitle }) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <div className="row">
        <div className="col">
          <h1 className="text-white display-3">
            <Image src={logo} width={50} height={50} alt="logo" />
            <span>
              <strong>Prairie</strong>Learn
            </span>
          </h1>
          {subtitle && <h4 className="text-white mt-4 fs-3">{subtitle}</h4>}
        </div>
      </div>
    </div>
  </div>
);


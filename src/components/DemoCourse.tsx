import React from "react";
import classnames from "classnames";
import Link from "next/link";

import styles from "./Banner.module.scss";

export interface DemoCourseCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
}

export const DemoCourseCTA: React.FC<DemoCourseCTAProps> = ({
  title,
  subtitle,
  buttonLabel,
}) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <div className="row">
        <div className="col">
          <h3 className="text-white display-6">{title}</h3>
          <p className="text-white mt-3 fs-6">{subtitle}</p>
        </div>
      </div>
      <div className="row justify-content-center my-2">
        <div className="col-md-12 text-center">
          <Link
            href="https://us.prairielearn.com/pl/course_instance/4970"
            className="btn btn-warning btn-lg"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

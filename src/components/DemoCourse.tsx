import React from "react";
import classnames from "classnames";
import Link from "next/link";

import styles from "./Banner.module.scss";

const Row: React.FC = ({ children }) => (
  <div className="row justify-content-centerrr">{children}</div>
);

const Column: React.FC = ({ children }) => (
  <div className="col">{children}</div>
);

export interface DemoCourseActionProps {
  title: string;
  text: string;
  button: string;
}

export const DemoCourseAction: React.FC<DemoCourseActionProps> = ({
  title,
  text,
  button,
}) => (
  <div className={classnames("container-fluid py-4", styles.container)}>
    <div className="container-md">
      <Row>
        <Column>
          <h3 className="text-white display-6">{title}</h3>
          <p className="text-white  mt-3 fs-6">{text}</p>
        </Column>
      </Row>
      <div className="row justify-content-center my-2">
        <div className="col-md-12 text-center">
          <Link href="https://www.prairielearn.org/pl/course_instance/128605">
            <a className="btn btn-warning btn-lg">{button}</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

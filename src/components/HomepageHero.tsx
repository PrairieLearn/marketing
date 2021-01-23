import React from "react";
import classnames from "classnames";

import styles from "./HomepageHero.module.scss";

export const HomepageHero: React.FC = ({ children }) => {
  return (
    <div className={classnames("container-fluid py-4", styles.container)}>
      <div className="container-md">
        <h1 className="text-white display-3">
          <span>The best platform for</span>
          <br />
          <span>online courses</span>
        </h1>
        <p className="text-white mt-4 fs-3">
          PrairieLearn empowers instructors to build content that helps their
          students achieve mastery.
        </p>
        <a href="foobar" className="btn btn-light btn-lg me-3">
          Documentation
        </a>
        <a
          href="mailto:hello@prairielearn.com"
          className="btn btn-outline-light btn-lg"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

import React from "react";
import classnames from "classnames";

import styles from "./HomepageHeading.module.scss";

export const HomepageHeading: React.FC = ({ children }) => (
  <h2 className={classnames(styles.heading, "pb-3 h2")}>{children}</h2>
);

import React from "react";
import { Link } from "./Link";

import classnames from "classnames";
import styles from "./ResearchCard.module.scss";

export interface ResearchCardProps {
  title: string;
  body: string;
  paperHref: string;
  reference: string;
}
export const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  body,
  paperHref,
  reference,
}) => (
  <div className="card w-75 mx-auto">
    <div className="card-body d-flex flex-column">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{body}</p>
      <Link href={paperHref}>
        <p className={classnames(styles["card-text"], "card-text")}>{reference}</p>
      </Link>
    </div>
  </div>
);
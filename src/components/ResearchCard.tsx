import React from "react";
import { Link } from "./Link";

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
  <div className="card">
    <div className="card-body d-flex flex-column">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{body}</p>
      <Link href={paperHref} className="small">
        {reference}
      </Link>
    </div>
  </div>
);

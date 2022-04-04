import React from "react";
import { Link } from "./Link";

export interface ResearchCardProps {
  title: string;
  children: React.ReactNode;
  reference: string;
  referenceHref: string;
}
export const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  children,
  referenceHref,
  reference,
}) => (
  <div className="card">
    <div className="card-body d-flex flex-column">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{children}</p>
      <Link href={referenceHref} className="small">
        {reference}
      </Link>
    </div>
  </div>
);

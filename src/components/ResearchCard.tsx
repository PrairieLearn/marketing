import React from "react";
import { LinkButton } from "./LinkButton";

export interface ResearchCardProps {
  // assessmentHref: string;
  // readmoreHref: string;
  title: string;
  body: string;
}
export const ResearchCard: React.FC<ResearchCardProps> = ({
  // assessmentHref,
  // readmoreHref,
  title,
  body,
}) => (
  <div className="card">
    <div className="card-body d-flex flex-column">
    <div className="col-md-6 order-2 pt-4">
              <Image src={assessmentImage} alt="assessment page view" />
            </div>
            <div className="col-md-6 order-1">
              
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{body}</p>
      {/* <div className="row justify-content-center mt-auto">
        <div className="col-md-4  col-sm-4 col-xs-2 py-1 px-1">
          <LinkButton label="Read more" href={readmoreHref} />
        </div>
        <div className="col-md-4 col-sm-4 col-xs-2 py-1 px-1">
          <LinkButton label="Try it now!" href={assessmentHref} />
        </div>
      </div> */}
    </div>
  </div>
);

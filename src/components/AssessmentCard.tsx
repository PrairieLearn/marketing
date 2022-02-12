import { read } from "fs";
import React from "react";
import Image from "../components/Image";
import { LinkButton } from "../components/LinkButton";

export interface AssessmentCardProps {
  assessmentHref: string;
  readmoreHref: string,
  image: File[];
  title: string;
  body: string;
}
export const AssessmentCard: React.FC<AssessmentCardProps> = ({
  assessmentHref,
  readmoreHref,
  image,
  title,
  body,
}) => (
  <div className="container-sm border bg-white">
    <div className="row">
      <div className="col-md-4 order-1 py-3">
        <a style={{ position: "relative" }}>
          <Image src={image} alt="assessment page view" />
        </a>
      </div>
      <div className="col-md-8 order-2 py-3 px-3">
        <div className="row">
          <h3> {title} </h3>
          <p> {body} </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4  col-sm-4 py-2 px-2">
              <LinkButton
                label="Read more"
                href={readmoreHref}
              />
          </div>
          <div className="col-md-4 col-sm-4 py-2 px-2">
              <LinkButton
                label="Try it now!"
                href={assessmentHref}
              />
          </div>
        </div>
      </div>
    </div>
  </div>
);

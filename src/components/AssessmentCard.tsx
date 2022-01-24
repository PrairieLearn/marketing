import React from "react";
import Link from "next/link";
import Image from "../components/Image";

export interface AssessmentCardProps {
  assessmentHref: string;
  image: File[];
  title: string;
  body: string;
}

export const AssessmentCard: React.FC<AssessmentCardProps> = ({
  assessmentHref,
  image,
  title,
  body,
}) => (
  <div className="container-md border my-4 b-white">
    <div className="row">
      <div className="col-md-4 order-1 py-3">
        <Link href={assessmentHref}>
          <a style={{ position: "relative" }}>
            <Image src={image} alt="assessment page view" />
          </a>
        </Link>
      </div>
      <div className="col-md-8 order-2 py-3 px-3">
        <h3> {title} </h3>
        <p> {body} </p>
      </div>
    </div>
  </div>
);

import React from "react";
import Image from "../components/Image";

export interface QuestionCardProps {
  title: string;
  body: string;
  image: string;
}
export const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  body,
  image,
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
      </div>  
      </div>
   </div>
);

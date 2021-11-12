import React from "react";
import Link from "next/link";

export const ButtonToPage: React.FC = ({ text, page }) => (
  <div className="row justify-content-center my-2">
    <div className="col-md-12 text-center py-3">
      <Link href={ page }>
        <a className="btn btn-warning btn-md">{ text }</a>
      </Link>
    </div>
  </div>
);

import React from "react";
import Link from "next/link";

export interface LinkButtonProps {
  label: string;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ label, href }) => (
  <div className="row justify-content-center my-2">
    <div className="col-md-12 text-center py-3">
      <Link href={href} className="btn btn-warning btn-md">
        {label}
      </Link>
    </div>
  </div>
);

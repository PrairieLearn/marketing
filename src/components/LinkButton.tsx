import React from "react";
import Link from "next/link";

export interface LinkButtonProps {
  label: string;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ label, href }) => (
      <Link href={href}>
        <a className="btn btn-warning btn-md">{label}</a>
      </Link>
);

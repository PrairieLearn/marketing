import React from "react";
import classnames from "classnames";

interface HomepageRowProps {
  children: React.ReactNode;
  className?: string;
}

export const HomepageRow: React.FC<HomepageRowProps> = ({
  children,
  className,
}) => <div className={classnames("row", className)}>{children}</div>;

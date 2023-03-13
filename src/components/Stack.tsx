import React from "react";
import classNames from "classnames";
import flattenChildren from "react-keyed-flatten-children";

export interface StackProps {
  children: React.ReactNode;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5;
}

const Stack: React.FC<StackProps> = ({ spacing = 3, children }) => {
  const flattenedChildren = flattenChildren(children);

  return (
    <div className="d-flex flex-column">
      {flattenedChildren.map((child, index) => {
        return (
          <React.Fragment key={(child as any).key || index}>
            <div
              className={classNames({
                [`mb-${spacing}`]: index !== flattenedChildren.length - 1,
                [`mt-${spacing}`]: index !== 0,
              })}
            >
              {child}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stack;

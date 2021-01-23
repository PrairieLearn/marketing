import React from "react";
import classNames from "classnames";
import flattenChildren from "react-keyed-flatten-children";

export interface StackProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { spacing, className, children, ...otherProps } = props;
  const flattenedChildren = flattenChildren(children);

  return (
    <div className={className} ref={ref} {...otherProps}>
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
});

export default Stack;

import React from "react";
import classnames from "classnames";
import styles from "./Tag.module.scss";

export const Tag = ({
  tag,
  className,
}: {
  tag: string;
  className?: string;
}) => {
  const isTechnical = tag.toLowerCase() === "technical";

  return (
    <span
      className={classnames(
        styles.tag,
        {
          [styles.technical]: isTechnical,
        },
        className,
      )}
    >
      {tag}
    </span>
  );
};

export const TagList = ({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={classnames(styles.tagList, className)}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

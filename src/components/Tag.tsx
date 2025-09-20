import React from "react";
import classnames from "classnames";
import styles from "./Tag.module.scss";

interface TagProps {
  tag: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ tag, className }) => {
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

interface TagListProps {
  tags: string[];
  className?: string;
}

export const TagList: React.FC<TagListProps> = ({ tags, className }) => {
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

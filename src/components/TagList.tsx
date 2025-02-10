import React from "react";
import clsx from "clsx";
import { Chip } from "./Chip";

interface TagListProps {
  tags: string[];
  className?: string;
  chipPrimary?: boolean;
}
export function TagList(props: TagListProps) {
  const { className, tags, chipPrimary } = props;
  return (
    <div className={clsx(className, "flex flex-wrap")}>
      {tags.map((tag, index) => (
        <Chip key={index} className={"ml-0 mr-1 mb-1"} primary={chipPrimary}>
          {tag}
        </Chip>
      ))}
    </div>
  );
}

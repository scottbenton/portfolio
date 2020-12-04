import React from "react";
import clsx from "clsx";
import { Chip } from "./Chip";

interface TechnologyListProps {
  technologies: string[];
  className?: string;
  chipPrimary?: boolean;
}

export const TechnologyList: React.FC<TechnologyListProps> = (props) => {
  const { className, technologies, chipPrimary } = props;
  return (
    <div className={clsx(className, "flex flex-wrap")}>
      {technologies.map((technology, index) => (
        <Chip key={index} className={"ml-0 mr-1 mb-1"} primary={chipPrimary}>
          {technology}
        </Chip>
      ))}
    </div>
  );
};

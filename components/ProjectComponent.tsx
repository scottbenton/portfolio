import React from "react";
import clsx from "clsx";
import { ProjectConfig } from "@/content/projects";
import { TechnologyList } from "./TechnologyList";

interface ProjectComponentProps {
  project: ProjectConfig;
  index: number;
}

export const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {
  const { project, index } = props;

  const {
    name,
    description,
    imageUrl,
    altText,
    technologies,
    prodLink,
    codeLink,
  } = project;

  return (
    <div
      className={clsx(
        "flex items-stretch flex-wrap flex-row bg-white shadow-lg rounded-lg overflow-hidden mt-8",
        index === 0 ? "mt-8" : "mt-12"
      )}
    >
      <div className={"md:w-1/2 w-full"}>
        <img src={imageUrl} className={"w-full "} alt={altText} />
      </div>
      <div
        className={
          "md:w-1/2 w-full p-4 md:pl-4 md:p-2 flex flex-col border md:rounded-r-lg rounded-b-lg md:rounded-bl-none"
        }
      >
        <h2 className={"mt-0"}>{name}</h2>
        <div className={"flex-grow mt-1"}>{description}</div>
        {technologies && (
          <TechnologyList technologies={technologies} className={"mt-4"} />
        )}
        <div className={"flex flex-wrap items-baseline"}>
          {prodLink && (
            <a
              href={prodLink}
              className={
                "uppercase text-purple-800 font-semibold text-sm focus:underline hover:underline tracking-wide mt-2"
              }
            >
              Visit the Project
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              className={
                "uppercase font-semibold ml-6 text-sm focus:underline hover:underline tracking-wide my-1"
              }
            >
              View the Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

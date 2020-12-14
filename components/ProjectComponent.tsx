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
    <div className={"flex items-stretch flex-wrap flex-row mb-20"}>
      <div className={"w-full md:w-1/2 md:pr-4 flex items-center"}>
        <a
          href={prodLink}
          className={
            "cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl overflow-hidden rounded-md"
          }
        >
          <img src={imageUrl} className={"w-full"} alt={altText} />
        </a>
      </div>
      <div className={"md:w-1/2 w-full md:pl-4 flex flex-col mt-4 md:mt-0"}>
        <h2>{name}</h2>
        <div className={"flex-grow mt-1"}>{description}</div>
        {technologies && (
          <TechnologyList
            technologies={technologies}
            className={"mt-4"}
            chipPrimary={false}
          />
        )}
        <div className={"flex flex-wrap items-baseline"}>
          {prodLink && (
            <a
              href={prodLink}
              className={
                "btn btn-animate btn-outlined btn-outlined-purple text-sm px-2 py-1 mt-2 "
                // "uppercase  px-4 py-1 rounded-md font-semibold text-sm hover:underline focus:underline tracking-wide mt-2 text-purple-800 border border-purple-700"
              }
            >
              Visit the Project
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              className={
                "btn btn-animate text-sm px-2 py-1 mt-2 ml-4 hover:bg-gray-300"
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

import React from "react";
import Image from "next/image";
import { ProjectConfig } from "content/projects";
import { TechnologyList } from "./TechnologyList";
import { Card } from "./Card";

interface ProjectComponentProps {
  project: ProjectConfig;
}

export const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {
  const { project } = props;

  const {
    name,
    description,
    image,
    altText,
    technologies,
    prodLink,
    codeLink,
  } = project;

  return (
    <Card className={"p-0 overflow-hidden"}>
      <h2 className={"px-4 py-3 text-xl"}>{name}</h2>
      <Image src={image} alt={altText} />
      <div className={"p-4 mt-1 flex flex-col flex-grow"}>
        <div className={"flex-grow"}>{description}</div>
        {technologies && (
          <TechnologyList technologies={technologies} className={"mt-4"} />
        )}
      </div>
      <div className={"flex flex-wrap p-4 pt-0"}>
        <a
          href={codeLink}
          className={
            "btn btn-outlined-primary btn-outlined hover:bg-primary-100 transition-all duration-300 ease-in-out rounded-r-none w-1/2"
          }
        >
          View the Code
        </a>
        <a
          href={prodLink}
          className={
            "btn btn-filled-primary btn-filled hover:bg-primary-800 transition-all duration-300 ease-in-out rounded-l-none w-1/2 "
          }
        >
          Visit the Project
        </a>
      </div>
    </Card>
  );
};

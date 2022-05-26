import React from "react";
import Image from "next/image";
import { ProjectConfig } from "content/projects";
import { TechnologyList } from "./TechnologyList";
import { Card } from "./Card";
import ArrowRightIcon from "@heroicons/react/outline/ChevronRightIcon";

interface ProjectComponentProps {
  project: ProjectConfig;
}

export const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {
  const { project } = props;

  const {
    name,
    subTitle,
    description,
    image,
    altText,
    technologies,
    prodLink,
    codeLink,
  } = project;

  return (
    <li>
      <Card
        className={
          "overflow-hidden bg-white text-gray-800 p-4 md:px-8 md:py-12"
        }
      >
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
          <div>
            <h2 className={"text-4xl text-gray-900 font-black"}>{name}</h2>
            <p
              className={
                "uppercase text-lg tracking-wide font-normal text-gray-600"
              }
            >
              {subTitle}
            </p>
            {technologies && (
              <TechnologyList technologies={technologies} className={"mt-4"} />
            )}
          </div>
          <div>
            <div className={"text-xl text-gray-700"}>{description}</div>
            <div
              className={
                "flex flex-col items-baseline md:flex-row md:space-x-4 font-semibold text-gray-900 mt-4"
              }
            >
              <a
                href={prodLink}
                className={
                  "flex items-center bg-primary-200 text-primary-900 hover:bg-primary-300 focus:outline-none focus:ring-4 ring-primary-300 px-3 -ml-3 py-2 rounded-lg transition-colors duration-150 ease-in-out"
                }
              >
                Visit the Project
                <ArrowRightIcon className={"w-6 ml-2 text-primary-500"} />
              </a>
              <a
                href={codeLink}
                className={
                  "flex items-center hover:bg-primary-200 focus:outline-none focus:ring-4 ring-primary-300 px-3 -ml-3 py-2 rounded-lg transition-colors duration-150 ease-in-out"
                }
              >
                View the Code
                <ArrowRightIcon className={"w-6 ml-2 text-primary-500"} />
              </a>
            </div>
          </div>
        </div>
        <div className={"mt-4"}>
          <Image
            src={image}
            alt={altText}
            className={"rounded-3xl overflow-hidden"}
          />
        </div>
      </Card>
    </li>
  );
};

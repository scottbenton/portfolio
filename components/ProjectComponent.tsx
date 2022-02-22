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
            "btn btn-outlined-primary btn-outlined rounded-r-none w-1/2"
          }
        >
          View the Code
        </a>
        <a
          href={prodLink}
          className={"btn btn-filled-primary rounded-l-none w-1/2 "}
        >
          Visit the Project
        </a>
      </div>
    </Card>
    // <div className={"flex items-stretch flex-wrap flex-row mb-20"}>
    //   <div className={"w-full md:w-1/2 md:pr-4 flex items-center"}>
    //     <a
    //       href={prodLink}
    //       className={
    //         "cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl overflow-hidden rounded-md"
    //       }
    //     >
    //       <img src={imageUrl} className={"w-full"} alt={altText} />
    //     </a>
    //   </div>
    //   <div className={"md:w-1/2 w-full md:pl-4 flex flex-col mt-4 md:mt-0"}>
    //     <h2>{name}</h2>
    //     <div className={"flex-grow mt-1"}>{description}</div>
    //     {technologies && (
    //       <TechnologyList
    //         technologies={technologies}
    //         className={"mt-4"}
    //         chipPrimary={false}
    //       />
    //     )}
    //     <div className={"flex flex-wrap items-baseline"}>
    //       {prodLink && (
    //         <a
    //           href={prodLink}
    //           className={
    //             "btn btn-animate btn-outlined btn-outlined-primary text-sm px-2 py-1 mt-2 "
    //           }
    //         >
    //           Visit the Project
    //         </a>
    //       )}
    //       {codeLink && (
    //         <a
    //           href={codeLink}
    //           className={
    //             "btn btn-animate text-sm px-2 py-1 mt-2 ml-4 hover:bg-gray-300"
    //           }
    //         >
    //           View the Code
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

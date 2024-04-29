import experiences from "content/experience.json";
import React from "react";

// Take the experiences array and map over it to create a list of Experience components
export function Experience() {
  return (
    <>
      {experiences.map((experience) => (
        <React.Fragment key={experience.company}>
          <div className={"text-gray-300 text-right leading-7"}>
            {experience.dates}
          </div>
          <div>
            <h3 className={"text-xl font-bold m-0"}>{experience.company}</h3>
            <p className={"text-gray-300"}>
              <span className={"text-white font-semibold"}>
                {experience.title}
              </span>{" "}
              | {experience.location}
            </p>
            <p className={"text-gray-300 max-w-prose"}>
              {experience.description}
            </p>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

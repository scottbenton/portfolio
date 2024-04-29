import { projects } from "content/projects";
import { Button } from "./controls/Button";
import Link from "next/link";
import { Card } from "./Card";
// Render out the list of projects in a horizontally scrolling list
export function Projects() {
  return (
    <div className={"overflow-x-auto -mx-4 md:-mx-8 mt-8"}>
      <div className="flex flex-row items-stretch space-x-4 px-4 md:px-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col w-96 min-w-96"
            disablePadding
          >
            <img
              src={project.image.src}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mt-0">{project.name}</h3>
              <p className="text-gray-300 flex-grow">{project.description}</p>
              <div className="flex flex-row flex-wrap mt-2">
                <Button inlineColor component={Link} href={project.link}>
                  View App
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

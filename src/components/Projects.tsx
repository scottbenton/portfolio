import { projects } from "@/content/projects";
import { Button } from "./Button";
import Link from "next/link";
import { Card } from "./Card";
import Image from "next/image";

// Render out the list of projects in a horizontally scrolling list
export function Projects() {
  return (
    <div className={"mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2"}>
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col w-full" disablePadding>
          <Image
            src={project.image.src}
            alt={project.name}
            width={600}
            height={400}
            loading="lazy"
            className="w-full object-cover rounded-t-lg"
          />
          <div className="p-4 flex flex-col grow">
            <h3 className="text-xl font-semibold mt-0">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 grow">
              {project.description}
            </p>
            <div className="flex flex-row flex-wrap mt-2">
              <Button inlineColor component={Link} href={project.link}>
                View App
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

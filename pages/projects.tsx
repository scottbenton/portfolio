import React from "react";
import { projects } from "content/projects";
import { ProjectComponent } from "components/ProjectComponent";
import { Layout } from "components/layout/Layout";

const Projects: React.FC = (props) => {
  return (
    <Layout title={"Projects"}>
      <div
        className={
          "mx-auto max-w-screen-sm lg:max-w-screen-lg grid gap-6 grid-cols-1 lg:grid-cols-2 w-full mt-4 px-2 md:px-8"
        }
      >
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

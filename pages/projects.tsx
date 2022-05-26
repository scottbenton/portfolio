import React from "react";
import { projects } from "content/projects";
import { ProjectComponent } from "components/ProjectComponent";
import { Layout } from "components/layout/Layout";

const Projects: React.FC = (props) => {
  return (
    <Layout title={"Projects"}>
      <ul className={"mx-auto space-y-12 w-full mt-4 md:mt-8 md:px-4"}>
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;

import React from "react";
import { projects } from "content/projects";
import { ProjectComponent } from "components/ProjectComponent";
import { Layout } from "components/layout/Layout";

const Projects: React.FC = (props) => {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className={"mx-auto px-8 max-w-screen-lg w-full pt-12"}>
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} index={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

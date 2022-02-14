import React from "react";
import AboutMe from "content/AboutMe.mdx";
import { Card } from "components/Card";

const About: React.FC = () => {
  return (
    <>
      <h1>About Me</h1>
      <Card className={"mt-4 mx-auto"}>
        <div className={" px-2 prose"}>
          <AboutMe />
        </div>
      </Card>
      <a
        className={
          "bg-primary-700 text-white font-bold tracking-wider uppercase shadow px-6 py-4 transition-all transform hover:shadow-md hover:scale-105 duration-300 ease-in-out rounded-lg cursor-pointer my-8 text-center"
        }
        href={"/scottbenton.pdf"}
        target={"__blank"}
      >
        Download my Resumé
      </a>
    </>
  );
};

export default About;

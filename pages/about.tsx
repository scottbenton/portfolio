import React from "react";
import AboutMe from "content/AboutMe.mdx";
import { Card } from "components/Card";
import { Layout } from "components/layout/Layout";

const About: React.FC = () => {
  return (
    <Layout title={"About Me"}>
      <Card className={"mt-4 mx-auto max-w-screen-sm w-full"}>
        <div className={" px-2 prose"}>
          <AboutMe />
        </div>
        <a
          className={
            "bg-primary-700 text-white font-bold tracking-wider uppercase shadow px-6 py-4 transition-all transform hover:shadow-md hover:scale-105 duration-300 ease-in-out rounded-lg cursor-pointer mt-8 text-center"
          }
          href={"/scottbenton.pdf"}
          target={"__blank"}
        >
          Download my Resumé
        </a>
      </Card>
    </Layout>
  );
};

export default About;

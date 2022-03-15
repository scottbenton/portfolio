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
            "btn btn-filled btn-filled-primary btn-animate w-full py-5 text-lg mt-4"
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

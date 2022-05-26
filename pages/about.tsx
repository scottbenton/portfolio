import React from "react";
import AboutMe from "content/AboutMe.mdx";
import { Card } from "components/Card";
import { Layout } from "components/layout/Layout";
import OpenResumeIcon from "@heroicons/react/outline/ChevronRightIcon";

const About: React.FC = () => {
  return (
    <Layout title={"About Me"}>
      <Card className={"mt-4 mx-auto max-w-screen-sm w-full"}>
        <div className={" px-2 prose"}>
          <AboutMe />
        </div>
        <div className={"flex mt-4"}>
          <a
            className={
              "flex items-center font-semibold text-primary-900  text-lg px-4 py-2 bg-primary-200 hover:bg-primary-300 focus:ring-4 ring-primary-300 focus:outline-none rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
            }
            href={"/scottbenton.pdf"}
            target={"__blank"}
          >
            View my Resumé
            <OpenResumeIcon className={"text-primary-500 w-6 ml-2"} />
          </a>
          {/* <a
            className={
              "btn btn-filled btn-filled-primary btn-animate py-4 px-5 text-lg mt-4"
            }
            href={"/scottbenton.pdf"}
            target={"__blank"}
          >
            Download my Resumé
          </a> */}
        </div>
      </Card>
    </Layout>
  );
};

export default About;

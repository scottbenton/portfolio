import React from "react";
import AboutMe from "@/content/AboutMe.md";
import { Card } from "@/components/Card";

const About: React.FC = () => {
  return (
    <>
      <h1>About Me</h1>
      <Card className={"mt-24 max-w-screen-md mx-auto"}>
        <div
          style={{ backgroundImage: 'url("/profile.jpg")' }}
          className={
            "w-40 h-40 -mt-24 bg-center bg-cover rounded-full mx-auto border-4 border-white"
          }
        />
        <div className={"mt-2 px-2 prose"}>
          <AboutMe />
        </div>
      </Card>
      <a
        className={
          "bg-purple-700 text-white font-bold tracking-wider uppercase shadow px-6 py-4 transition-all transform hover:shadow-md hover:scale-105 duration-300 ease-in-out rounded-lg cursor-pointer mt-8 text-center"
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

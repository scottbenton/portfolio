import React from "react";
import Link from "next/link";

const FourZeroFour: React.FC = (props) => {
  return (
    <div
      className={"text-center flex flex-col h-full justify-center items-center"}
    >
      <h3 className={"text-4xl font-body"}>404</h3>
      <p className={"text-2xl text-gray-700 m-0"}>
        This page could not be found.
      </p>
      <Link href="/">
        <a
          className={
            "px-6 py-4 mt-8 uppercase font-bold tracking-wider text-center bg-purple-700 text-white rounded-lg cursor-pointer shadow hover:shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out"
          }
        >
          Go Home
        </a>
      </Link>
    </div>
  );
};
export default FourZeroFour;

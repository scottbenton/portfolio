import React from "react";
import Link from "next/link";
import { Layout } from "components/layout/Layout";

const FourZeroFour: React.FC = (props) => {
  return (
    <Layout>
      <div
        className={
          "text-center flex flex-col h-full justify-center items-center flex-grow pb-16"
        }
      >
        <h3 className={"text-4xl font-body text-white"}>404</h3>
        <p className={"text-2xl text-cyan-200 m-0 mt-2"}>
          This page could not be found.
        </p>
        <Link href="/">
          <a
            className={
              "btn btn-filled btn-animate text-xl btn-filled-white mt-4 px-8 py-4"
            }
          >
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
};
export default FourZeroFour;

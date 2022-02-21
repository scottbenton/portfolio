import React, { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import { PageTransition } from "./PageTransition";

interface ContentProps {
  className?: string;
}
export const Content: React.FC<ContentProps> = (props) => {
  const { className, children } = props;

  const isHomePage = useRouter().pathname === "/";

  return (
    <>
      <Transition show={isHomePage} className={"absolute inset-0"}>
        <div className="wave motion-reduce:after:animate-none motion-reduce:before:animate-none motion-reduce:before:rotate-12 motion-reduce:after:rotate-12" />
      </Transition>
      <PageTransition
        className={clsx(
          "flex flex-col flex-grow items-center max-w-screen-xl mx-auto w-full",
          className
        )}
      >
        {children}
      </PageTransition>
    </>
  );
};

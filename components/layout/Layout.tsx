import React from "react";
import { PageTransition } from "./PageTransition";
import clsx from "clsx";

export interface LayoutProps {
  className?: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, className } = props;
  return (
    <>
      <PageTransition
        className={clsx(
          "flex flex-col flex-grow items-center max-w-screen-xl mx-auto w-full pb-4",
          className
        )}
      >
        {children}
      </PageTransition>
    </>
  );
};

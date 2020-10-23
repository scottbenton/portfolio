import React from "react";
import clsx from "clsx";

interface ContentProps {
  className?: string;
}
export const Content: React.FC<ContentProps> = (props) => {
  const { className, children } = props;

  return (
    <div
      className={clsx(
        "flex flex-col flex-grow items-center max-w-screen-xl mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

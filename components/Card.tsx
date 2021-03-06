import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface CardProps {
  className?: string;
  href?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { children, className, href } = props;

  if (href) {
    return (
      <Link href={href}>
        <a
          className={clsx(
            "flex flex-col bg-white shadow-md rounded-lg p-4",
            className,
            "focus:outline-none cursor-pointer transition-all transform hover:shadow-xl hover:scale-105 duration-300 ease-in-out text-left"
          )}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <div
        className={clsx(
          "flex flex-col bg-white shadow-md rounded-lg p-4",
          className
        )}
      >
        {children}
      </div>
    );
  }
};

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
            "flex flex-col bg-white text-gray-800 shadow-md rounded-xl md:rounded-3xl p-4",
            className,
            "focus:outline-none btn-animate cursor-pointer focus:ring-4 ring-primary-300 focus:shadow-xl hover:shadow-xl hover:scale-105 focus:scale-105 text-left"
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
          "flex flex-col bg-white text-gray-800 shadow-md rounded-xl md:rounded-3xl p-4",
          className
        )}
      >
        {children}
      </div>
    );
  }
};

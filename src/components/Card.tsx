import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import Link from "next/link";

interface CardProps {
  className?: string;
  href?: string;
  disablePadding?: boolean;
}

export function Card(props: PropsWithChildren<CardProps>) {
  const { children, className, href, disablePadding } = props;

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          "flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg border-gray-300 dark:border-gray-700 border",
          className,
          "focus:outline-hidden btn-animate cursor-pointer focus:ring-4 ring-primary-300 focus:shadow-xl hover:shadow-xl hover:scale-105 focus:scale-105 duration-300 ease-in-out text-left",
          disablePadding ? "" : "p-4",
        )}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <div
        className={clsx(
          "flex flex-col dark:bg-gray-800 shadow-lg rounded-lg border-gray-300 dark:border-gray-700 border",
          className,
          disablePadding ? "" : "p-4",
        )}
      >
        {children}
      </div>
    );
  }
}

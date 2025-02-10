import React, { PropsWithChildren } from "react";
import clsx from "clsx";

export interface LayoutProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children, title, subtitle, className } = props;
  return (
    <div
      className={clsx(
        "pt-10 py-4 px-4 md:px-8 pb-8 flex flex-col items-center",
        className,
      )}
    >
      {title && <h1 className={"m-0"}>{title}</h1>}
      {subtitle && (
        <h2
          className={
            "text-primary-700 dark:text-primary-300 text-lg text-center"
          }
        >
          {subtitle}
        </h2>
      )}

      {children}
    </div>
  );
}

import React, { ReactNode } from "react";
import clsx from "clsx";

export interface IconTagProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export function IconTag(props: IconTagProps) {
  const { icon, label, className } = props;
  return (
    <div
      className={clsx(
        className,
        "pr-4 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-white p-1 inline-flex rounded-full text-lg font-semibold items-center transition-colors ease-in-out duration-500",
      )}
    >
      <span
        className={
          "rounded-full bg-primary-700 dark:bg-primary-200 p-1 flex items-center text-white dark:text-primary-700 mr-2 transition-colors ease-in-out duration-500"
        }
      >
        {icon}
      </span>
      {label}
    </div>
  );
}

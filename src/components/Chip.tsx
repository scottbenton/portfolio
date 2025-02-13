import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ChipProps {
  className?: string;
  primary?: boolean;
}

export function Chip(props: PropsWithChildren<ChipProps>) {
  const { children, className, primary = true } = props;
  return (
    <div
      className={clsx(
        className,
        "text-xs tracking-wider font-bold px-2 py-1 bg-gray-300 text-gray-900 rounded-md",
        primary && "bg-primary-300 text-primary-900",
      )}
    >
      {children}
    </div>
  );
}

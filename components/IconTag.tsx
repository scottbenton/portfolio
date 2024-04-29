import React from "react";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import clsx from "clsx";

export interface IconTagProps {
  Icon: typeof EnvelopeIcon;
  label: string;
  className?: string;
}

export function IconTag(props: IconTagProps) {
  const { Icon, label, className } = props;
  return (
    <div
      className={clsx(
        className,
        "pr-4 bg-gray-700 inline-flex rounded-full text-gray-200  text-lg font-semibold items-center"
      )}
    >
      <span
        className={
          "rounded-full bg-primary-200 p-2 flex items-center text-primary-700 mr-2"
        }
      >
        <Icon className={"w-5 h-5"} />
      </span>
      {label}
    </div>
  );
}

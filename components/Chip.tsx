import React from "react";
import clsx from "clsx";

interface ChipProps {
  className?: string;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        className,
        "text-xs tracking-wider font-bold px-2 py-1 bg-purple-700 text-white rounded-md"
      )}
    >
      {children}
    </div>
  );
};

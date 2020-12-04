import React from "react";
import clsx from "clsx";

interface ChipProps {
  className?: string;
  primary?: boolean;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { children, className, primary = true } = props;
  return (
    <div className={clsx(className, "chip-base", primary && "chip-primary")}>
      {children}
    </div>
  );
};

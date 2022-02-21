import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

const durations = {
  short: "duration-150",
  medium: "duration-300",
  long: "duration-500",
  "extra-long": "duration-1000",
};

export interface FadeInProps {
  duration?: keyof typeof durations;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = (props) => {
  const { children, duration = "short", className } = props;
  console.debug(duration);
  return (
    <Transition
      className={className}
      appear
      show
      enter={clsx("transition-all", durations[duration])}
      enterFrom="opacity-0 translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave={clsx("transition-opacity", durations[duration])}
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};

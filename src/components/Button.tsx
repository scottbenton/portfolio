import clsx from "clsx";
import { ElementType, ComponentProps } from "react";

export type ButtonProps<T extends ElementType> = {
  component?: ElementType;
  inlineColor?: boolean;
} & ComponentProps<T>;

export function Button<T extends ElementType>({
  component: Component = "button",
  children,
  className,
  inlineColor,
  ...buttonProps
}: ButtonProps<T>) {
  return (
    <Component
      className={clsx(
        "inline-flex indent-0 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ease-in-out transform focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-200 focus:ring-offset-opacity-50 focus:scale-105 hover:scale-105",
        className,
        inlineColor
          ? "text-primary-700 hover:bg-primary-200 dark:text-primary-300 dark:hover:bg-gray-700"
          : "bg-primary-600 dark:bg-primary-200 hover:bg-primary-700 dark:hover:bg-white text-white dark:text-primary-700",
      )}
      {...buttonProps}
    >
      {children}
    </Component>
  );
}

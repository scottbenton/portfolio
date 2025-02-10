import Link from "next/link";
import clsx from "clsx";
import { PAGES } from "./__pageConfig";
import { ScottBentonLogo } from "@/content/ScottBentonLogo";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function Header() {
  return (
    <>
      <header
        className={clsx(
          "z-10 flex h-16 w-full items-center fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out",
        )}
      >
        <div
          className={
            "w-full flex items-center justify-center sm:justify-between max-w-3xl mx-auto px-4 md:px-8"
          }
        >
          <Link
            href={"/"}
            className={
              "hidden sm:block text-primary-600 font-semibold text-xl cursor-pointer hover:underline focus:underline focus:outline-hidden font-display"
            }
          >
            <ScottBentonLogo />
          </Link>
          <nav className={"flex items-center justify-center space-1"}>
            {Object.values(PAGES).map((page, index) => (
              <Link
                key={index}
                href={page.path}
                className={clsx(
                  "px-2 sm:px-3 py-2 rounded-full text-base cursor-pointer text-gray-600 dark:text-gray-200 focus:outline-none focus:bg-primary-100 focus:dark:bg-primary-800 hover:text-primary-700 focus:text-primary-700 hover:dark:text-white focus:dark:text-white hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors ease-in-out duration-200",
                )}
              >
                {page.label}
              </Link>
            ))}
          </nav>
          <ThemeToggleButton />
        </div>
      </header>
      <div className={"h-16"} />
    </>
  );
}

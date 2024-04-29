import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { PAGES } from "components/layout/__pageConfig";
import { ScottBentonLogo } from "content/ScottBentonLogo";

export function Header() {
  const router = useRouter();

  const getClasses = (path: string) => {
    let classes =
      "font-semibold text-center text-base transition-color duration-300 ease-in-out px-2 sm:px-4";

    if (router.pathname === path) {
      classes = clsx(classes, "underline", "text-white");
    } else {
      classes = clsx(classes, "text-gray-200");
    }

    return classes;
  };

  return (
    <>
      <header
        className={clsx(
          "z-10 flex h-16 w-full items-center fixed top-0 left-0 right-0 bg-gray-950"
        )}
      >
        <div
          className={
            "w-full flex items-center justify-center sm:justify-between max-w-screen-lg mx-auto px-4 md:px-8"
          }
        >
          <Link
            href={"/"}
            className={
              "hidden sm:block text-primary-600 font-semibold text-xl cursor-pointer hover:underline focus:underline focus:outline-none font-display"
            }
          >
            <ScottBentonLogo />
          </Link>
          <nav className={"flex items-center justify-center"}>
            {Object.values(PAGES).map((page, index) => (
              <Link
                key={index}
                href={page.path}
                className={clsx(
                  getClasses(page.path),
                  "hover:underline focus:underline focus:outline-none"
                )}
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className={"h-16"} />
    </>
  );
}

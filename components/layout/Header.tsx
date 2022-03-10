import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { PAGES } from "components/layout/__pageConfig";
import { motion } from "framer-motion";

export function Header() {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  const getClasses = (path: string) => {
    let classes =
      "font-semibold text-center uppercase text-base transition-color duration-300 ease-in-out px-4";

    if (router.pathname === path) {
      classes = clsx(
        classes,
        "underline",
        isHomePage ? "text-primary-700" : "text-white"
      );
    } else {
      classes = clsx(
        classes,
        isHomePage ? "text-gray-500" : "text-primary-200"
      );
    }

    return classes;
  };

  return (
    <header className={clsx("z-10 hidden md:flex h-16 w-full items-center")}>
      {isHomePage ? (
        <nav className={"flex items-center flex-grow justify-center px-8"}>
          {Object.values(PAGES).map((page, index) => (
            <Link key={index} href={page.path}>
              <motion.a
                className={clsx(getClasses(page.path), "hover:underline")}
                layoutId={`link-${page.path}`}
              >
                {page.label}
              </motion.a>
            </Link>
          ))}
        </nav>
      ) : (
        <div
          className={
            "w-full flex items-center justify-between max-w-screen-lg mx-auto px-8"
          }
        >
          {!isHomePage && (
            <Link href={"/"}>
              <a
                className={
                  "text-white font-semibold text-xl cursor-pointer hover:underline focus:underline focus:outline-none font-display"
                }
              >
                Scott Benton
              </a>
            </Link>
          )}
          <nav className={"flex items-center justify-center"}>
            {Object.values(PAGES).map((page, index) => (
              <Link key={index} href={page.path}>
                <motion.a
                  layoutId={`link-${page.path}`}
                  className={clsx(
                    getClasses(page.path),
                    "hover:underline focus:underline focus:outline-none"
                  )}
                >
                  {page.label}
                </motion.a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

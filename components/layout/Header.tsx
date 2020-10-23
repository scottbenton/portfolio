import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { PAGES } from "@/components/layout/__pageConfig";

export function Header() {
  const router = useRouter();

  const isFlatPage =
    router.pathname === "/" || router.pathname === "/blog/[post]";

  return (
    <header className={clsx("z-10", isFlatPage ? "" : "shadow-lg bg-white")}>
      <div
        className={
          "max-w-screen-xl justify-center md:justify-between flex mx-auto"
        }
      >
        <div>
          <Link href="/">
            <a
              aria-label="Scott Benton Homepage"
              className={
                "px-4 md:px-8 flex font-display pt-1 my-1 md:my-2 text-gray-900 text-2xl hover:underline font-semibold tracking-tight focus:outline-none"
              }
            >
              Scott Benton
            </a>
          </Link>
        </div>
        <nav className={"hidden md:flex"}>
          {Object.values(PAGES).map((page, index) => (
            <Link key={index} href={page.path}>
              <a
                className={clsx(
                  "link",
                  page.path === router.pathname ? "link-selected" : ""
                )}
              >
                {page.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

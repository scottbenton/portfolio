import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { PAGES } from "@/components/layout/__pageConfig";

export function Header() {
  const router = useRouter();

  const isFlatPage =
    router.pathname === "/" || router.pathname === "/blog/[post]";

  const isHomePage = router.pathname === "/";

  return (
    <header
      className={clsx(
        "z-10 h-12 md:h-16",
        isFlatPage ? "" : "shadow-md bg-white"
      )}
    >
      <div
        className={
          "max-w-screen-xl justify-center md:justify-between items-center flex mx-auto h-full"
        }
      >
        <div>
          <Link href="/">
            <a
              aria-label="Scott Benton Homepage"
              className={
                "px-4 md:px-8 flex font-display my-1 md:my-2 text-gray-900 text-2xl md:text-3xl font-normal hover:underline tracking-tight focus:outline-none"
              }
            >
              Scott Benton
            </a>
          </Link>
        </div>
        <nav className={"hidden md:flex h-full"}>
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

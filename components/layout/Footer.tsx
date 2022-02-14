import React, { useRef, useEffect } from "react";
import { PAGES } from "./__pageConfig";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export const Footer: React.FC = (props) => {
  const [height, setHeight] = React.useState<number>(0);

  const router = useRouter();
  const currentPath = router.pathname;

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHeightChange = () => {
      setHeight(navRef.current ? navRef.current.clientHeight : 0);
    };

    window.addEventListener("resize", handleHeightChange);

    handleHeightChange();

    return () => window.removeEventListener("resize", handleHeightChange);
  }, [navRef]);

  return (
    <>
      <div className={"md:hidden"}>
        <div style={{ height: height }} />
      </div>
      <nav
        ref={navRef}
        className={"border box-border md:hidden bg-white fixed bottom-0 w-full"}
      >
        <div className={"py-2 px-6 flex justify-between w-full"}>
          {Object.values(PAGES).map((page, index) => {
            const Icon = page.icon;

            const selected = page.path === currentPath;
            return (
              <Link href={page.path} key={index}>
                <a
                  className={
                    "flex flex-col justify-center items-center focus:outline-none flex-grow"
                  }
                >
                  <Icon
                    className={clsx(
                      "w-6 h-6 fill-current transition-all duration-300 ease-in-out transform",
                      selected ? "text-primary-600 scale-125" : "text-gray-600"
                    )}
                  />
                  <span
                    className={clsx(
                      "text-xs uppercase font-bold tracking-widest transition-all duration-300 ease-in-out transform",
                      selected ? "text-primary-700" : "text-gray-700"
                    )}
                  >
                    {page.label}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

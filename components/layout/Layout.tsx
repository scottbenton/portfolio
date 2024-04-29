import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import clsx from "clsx";

export interface LayoutProps {
  className?: string;
  title?: string;
  subtitle?: string;
  seoProps?: NextSeoProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, title, subtitle, seoProps, className } = props;
  return (
    <>
      <NextSeo title={title} {...seoProps} />
      <div
        className={clsx(
          "pt-10 py-4 px-4 md:px-8 pb-8 flex flex-col items-center",
          className
        )}
      >
        {title && <h1 className={"m-0"}>{title}</h1>}
        {subtitle && (
          <h2 className={"text-primary-300 text-lg text-center"}>{subtitle}</h2>
        )}

        {children}
      </div>
    </>
  );
};

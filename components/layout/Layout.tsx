import React from "react";
import { PageTransition } from "./PageTransition";
import clsx from "clsx";
import { NextSeo, NextSeoProps } from 'next-seo';

export interface LayoutProps {
  className?: string;
  title?: string;
  subtitle?: string;
  seoProps?: NextSeoProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, className, title, subtitle, seoProps } = props;
  return (
    <>
      <NextSeo title={title} {...seoProps} />
      <PageTransition
        className={clsx(
          "flex flex-col flex-grow items-center max-w-screen-xl mx-auto w-full pb-4",
          className
        )}
      >
        {title && <h1>{title}</h1>}
        {subtitle && (
          <div className={"text-cyan-200 text-lg text-center"}>{subtitle}</div>
        )}
        {children}
      </PageTransition>
    </>
  );
};

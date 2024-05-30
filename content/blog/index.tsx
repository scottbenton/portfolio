import * as Welcome from "./Welcome.mdx";
import * as Caching from "./Caching.mdx";
import * as NextJSPortfolio from "./NextJSPortfolio.mdx";
import * as AdventPerformance from "./AdventOfCodeDay15.mdx";
import * as Pomodoro from "./Pomodoro.mdx";
import * as IFCL3 from "./IronFellowship3-ReleaseNotes.mdx";
import * as IFCL3_1 from "./IronFellowship3-1-ReleaseNotes.mdx";
import { DetailedHTMLProps, HTMLAttributes, createElement } from "react";

export interface IBlogPost {
  meta: {
    title: string;
    subtitle?: string;
    datePosted: Date;
    tags?: string[];
    url: string;
  };
  content: React.ReactNode;
}

const posts = [
  Welcome,
  Caching,
  NextJSPortfolio,
  AdventPerformance,
  Pomodoro,
  IFCL3,
  IFCL3_1,
];

const HeadingWithId: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
    level: number;
  }
> = (props) => {
  const { level, children, ...headingProps } = props;

  const id =
    typeof children === "string"
      ? children.toLowerCase().replaceAll(" ", "_")
      : undefined;

  let tagName = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return createElement(
    tagName,
    { id, ...headingProps, className: "scroll-mt-24" },
    children
  );
};

export const blogPosts: IBlogPost[] = posts
  .map((Post: any) => ({
    meta: Post.meta,
    content: (
      <Post.default
        components={{
          h1: (
            props: DetailedHTMLProps<
              HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          ) => <HeadingWithId level={1} {...props} />,
          h2: (
            props: DetailedHTMLProps<
              HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          ) => <HeadingWithId level={2} {...props} />,
          h3: (
            props: DetailedHTMLProps<
              HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          ) => <HeadingWithId level={3} {...props} />,
          h4: (
            props: DetailedHTMLProps<
              HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          ) => <HeadingWithId level={4} {...props} />,
          h5: (
            props: DetailedHTMLProps<
              HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          ) => <HeadingWithId level={5} {...props} />,
          h6: (
            props: DetailedHTMLProps<
              HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          ) => <HeadingWithId level={6} {...props} />,
        }}
      />
    ),
  }))
  .sort((a, b) => b.meta.datePosted.getTime() - a.meta.datePosted.getTime());

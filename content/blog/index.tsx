import * as Welcome from "./Welcome.mdx";
import * as Caching from "./Caching.mdx";
import * as NextJSPortfolio from "./NextJSPortfolio.mdx";
import * as AdventPerformance from "./AdventOfCodeDay15.mdx";

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

const posts = [Welcome, Caching, NextJSPortfolio, AdventPerformance];

export const blogPosts: IBlogPost[] = posts
  .map((Post) => ({
    meta: Post.meta,
    content: <Post.default />,
  }))
  .sort((a, b) => b.meta.datePosted.getTime() - a.meta.datePosted.getTime());

import * as Welcome from "./Welcome.mdx";
import * as Caching from "./Caching.mdx";

enum MONTHS {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11,
}
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

const posts = [Welcome, Caching];

export const blogPosts: IBlogPost[] = posts
  .map((Post) => ({
    meta: Post.meta,
    content: <Post.default />,
  }))
  .sort((a, b) => b.meta.datePosted.getTime() - a.meta.datePosted.getTime());

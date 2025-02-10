import { blogPosts } from "@/content/blog";
import { BlogPostCard } from "./BlogPostCard";

export function BlogPosts() {
  const post = blogPosts[0];
  return <BlogPostCard post={post} />;
}

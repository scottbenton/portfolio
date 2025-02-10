import React from "react";
import { blogPosts } from "@/content/blog";
import { Layout } from "@/components/layout";
import { BlogPostCard } from "@/components/BlogPostCard";
import { getMetaTags } from "@/helpers/getMetaTags";

export const metadata = getMetaTags({
  title: "Blog Posts",
  description: "Posts about things I've learned or built",
});

const Blog: React.FC = () => {
  return (
    <Layout
      title={"Blog Posts"}
      subtitle={"Posts about things I've learned or built"}
    >
      <div className={"w-full flex flex-col pb-4 gap-3 mt-6"}>
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

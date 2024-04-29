import React from "react";
import { blogPosts } from "content/blog";
import { Card } from "components/Card";
import { dateToLongString } from "helpers/time-helpers";
import { TechnologyList } from "../../components/TechnologyList";
import { Layout } from "components/layout/Layout";
import { BlogPostCard } from "components/BlogPostCard";

const Blog: React.FC = () => {
  return (
    <Layout
      title={"Blog Posts"}
      subtitle={"Posts about things I've learned or built"}
    >
      <div className={"px-4 w-full max-w-2xl pb-4"}>
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

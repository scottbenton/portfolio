import React from "react";
import { blogPosts } from "content/blog";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { dateToLongString } from "@/helpers/time-helpers";
import { TechnologyList } from "../../components/TechnologyList";

const Blog: React.FC = () => {
  return (
    <>
      <h1>Blog Posts</h1>
      <span className={"text-lg text-gray-700"}>
        Posts about things I've learned or built
      </span>
      <div className={"max-w-screen-md px-4"}>
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className={"w-full mt-6 p-6"}
            href={"/blog/" + post.meta.url}
          >
            <>
              <h2>{post.meta.title}</h2>
              <span className={"mt-1 text-gray-700 text-lg"}>
                {post.meta.subtitle}
              </span>
              <span className={"mt-4 text-gray-700 text-lg"}>
                {dateToLongString(post.meta.datePosted)}
              </span>
              {post.meta.tags && (
                <TechnologyList
                  technologies={post.meta.tags}
                  className={"mt-4"}
                />
              )}
            </>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Blog;

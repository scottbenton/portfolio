import React from "react";
import { blogPosts } from "content/blog";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { dateToLongString } from "@/helpers/time-helpers";

const Blog: React.FC = (props) => {
  return (
    <>
      <h1>Blog Posts</h1>
      <span className={"text-lg text-gray-700"}>
        Posts about things I've learned or built
      </span>
      <div className={"max-w-screen-md w-full p-8"}>
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className={"w-full mt-6"}
            href={"/blog/" + post.meta.url}
          >
            <>
              <h2>{post.meta.title}</h2>
              <span>{post.meta.subtitle}</span>
              <span>{dateToLongString(post.meta.datePosted)}</span>
              {post.meta.tags && (
                <div className={"flex"}>
                  {post.meta.tags.map((tag, index) => (
                    <Chip key={index}>{tag}</Chip>
                  ))}
                </div>
              )}
            </>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Blog;

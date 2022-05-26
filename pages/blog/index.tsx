import React from "react";
import { blogPosts } from "content/blog";
import { Card } from "components/Card";
import { dateToLongString } from "helpers/time-helpers";
import { TechnologyList } from "../../components/TechnologyList";
import { Layout } from "components/layout/Layout";

const Blog: React.FC = () => {
  return (
    <Layout
      title={"Blog Posts"}
      subtitle={"Posts about things I've learned or built"}
    >
      <div className={"md:px-4 w-full max-w-2xl pb-4"}>
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className={"w-full mt-6 px-6 py-4"}
            href={"/blog/" + post.meta.url}
          >
            <>
              <h2>{post.meta.title}</h2>
              <span className={"mt-1 text-gray-700 text-lg"}>
                {post.meta.subtitle}
              </span>
              <div
                className={"flex flex-wrap justify-between items-center mt-4"}
              >
                <span className={" text-gray-700 text-md"}>
                  {dateToLongString(post.meta.datePosted)}
                </span>
                {post.meta.tags && (
                  <TechnologyList technologies={post.meta.tags} />
                )}
              </div>
            </>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

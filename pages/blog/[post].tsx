import React from "react";
import { useRouter } from "next/router";
import { blogPosts } from "content/blog";
import { dateToLongString } from "helpers/time-helpers";
import { Layout } from "components/layout/Layout";
import { Card } from "components/Card";

const BlogPost: React.FC = (props) => {
  const router = useRouter();
  const { post } = router.query;

  const currentPost = blogPosts.find((blogPost) => blogPost.meta.url === post);

  if (!currentPost) {
    return null;
  }

  return (
    <Layout
      seoProps={{ title: currentPost.meta.title }}
      className={"max-w-prose mx-auto"}
    >
      <p
        className={
          "text-gray-200 mt-2 w-full text-sm uppercase tracking-wide font-semibold"
        }
      >
        {dateToLongString(currentPost.meta.datePosted)}
      </p>
      <h1 className={"w-full text-3xl md:text-4xl leading-tight"}>
        {currentPost.meta.title}
      </h1>
      <p
        className={
          "text-xl md:text-xl w-full mt-4 leading-snug tracking-wide text-gray-200"
        }
      >
        {currentPost.meta.subtitle}
      </p>
      <hr className={"w-full mt-4"} />
      <div
        className={
          "pb-4 md:pb-8 prose-sm md:prose-base lg:prose-lg max-w-full mt-12 text-gray-200"
        }
      >
        {currentPost?.content}
      </div>
    </Layout>
  );
};

export default BlogPost;

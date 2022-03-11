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
    <Layout seoProps={{title: currentPost.meta.title}}>
      <Card
        className={
          "flex flex-col items-center p-4 md:p-8 w-full mx-auto max-w-screen-md rounded-none md:rounded-md"
        }
      >
        <p
          className={
            "text-gray-700 mt-2 w-full text-sm uppercase tracking-wide font-semibold"
          }
        >
          {dateToLongString(currentPost.meta.datePosted)}
        </p>
        <h1 className={"w-full text-3xl md:text-4xl leading-tight"}>
          {currentPost.meta.title}
        </h1>
        <p
          className={
            "text-xl md:text-xl w-full mt-4 leading-snug tracking-wide text-gray-700"
          }
        >
          {currentPost.meta.subtitle}
        </p>
        <hr className={"w-full mt-4"} />
        <div
          className={
            "pb-4 md:pb-8 prose-sm md:prose-base lg:prose-lg max-w-full mt-12"
          }
        >
          {currentPost?.content}
        </div>
      </Card>
    </Layout>
  );
};

export default BlogPost;

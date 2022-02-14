import React from "react";
import { useRouter } from "next/router";
import { blogPosts } from "content/blog";
import { dateToLongString } from "helpers/time-helpers";

const BlogPost: React.FC = (props) => {
  const router = useRouter();
  const { post } = router.query;

  const currentPost = blogPosts.find((blogPost) => blogPost.meta.url === post);

  if (!currentPost) {
    return null;
  }

  return (
    <>
      <div
        className={
          "flex flex-col items-center px-4 w-full mx-auto max-w-3xl mt-4 md:mt-8"
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
        <div className={"pb-4 md:pb-8 prose lg:prose-lg max-w-full mt-12"}>
          {currentPost?.content}
        </div>
      </div>
    </>
  );
};

export default BlogPost;

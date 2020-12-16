import React from "react";
import { useRouter } from "next/router";
import { blogPosts } from "@/content/blog";
import { dateToLongString } from "@/helpers/time-helpers";

const BlogPost: React.FC = (props) => {
  const router = useRouter();
  const { post } = router.query;

  console.debug(post);
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
        <h1 className={"text-center w-full text-3xl md:text-4xl leading-tight"}>
          {currentPost.meta.title}
        </h1>
        <p
          className={
            "text-center text-xl md:text-2xl w-full mt-4 leading-snug tracking-wide"
          }
        >
          {currentPost.meta.subtitle}
        </p>
        <p className={"text-gray-700 mt-2 w-full text-center text-lg"}>
          {dateToLongString(currentPost.meta.datePosted)}
        </p>
        <div className={"pb-4 md:pb-8 prose lg:prose-lg max-w-full mt-8"}>
          {currentPost?.content}
        </div>
      </div>
    </>
  );
};

export default BlogPost;

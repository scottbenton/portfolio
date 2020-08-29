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
      <div className={"flex flex-col px-4 w-full"}>
        <div
          className={"max-w-xl flex flex-col items-center text-center mx-auto"}
        >
          <h1 className={"leading-tight"}>{currentPost.meta.title}</h1>
          <span className={"text-lg md: font-semibold mt-2"}>
            {currentPost.meta.subtitle}
          </span>
          <span className={"text-gray-700 mt-2"}>
            {dateToLongString(currentPost.meta.datePosted)}
          </span>
          <hr className={"my-6"} />
        </div>
        <div className={"prose mb-8 mx-auto w-full"}>
          {currentPost?.content}
        </div>
      </div>
    </>
  );
};

export default BlogPost;

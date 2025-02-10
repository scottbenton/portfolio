import React from "react";
import { blogPosts } from "@/content/blog";
import { dateToLongString } from "@/helpers/timeHelpers";
import { Layout } from "@/components/layout";
import { Metadata } from "next";
import { getMetaTags } from "@/helpers/getMetaTags";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const currentPost = blogPosts.find((blogPost) => blogPost.meta.url === slug);

  return getMetaTags({
    title: currentPost?.meta.title,
    description: currentPost?.meta.subtitle,
  });
}
export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { params } = props;
  const slug = (await params).slug;

  const currentPost = blogPosts.find((blogPost) => blogPost.meta.url === slug);

  if (!currentPost) {
    return null;
  }

  return (
    <Layout className={"max-w-prose mx-auto"}>
      <p
        className={
          "text-gray-600 dark:text-gray-200 mt-2 w-full text-sm uppercase tracking-wide font-semibold"
        }
      >
        {dateToLongString(currentPost.meta.datePosted)}
      </p>
      <h1 className={"w-full text-3xl md:text-4xl leading-tight"}>
        {currentPost.meta.title}
      </h1>
      <p
        className={
          "text-xl md:text-xl w-full mt-4 leading-snug tracking-wide text-primary-700 dark:text-primary-300"
        }
      >
        {currentPost.meta.subtitle}
      </p>
      <hr className={"w-full mt-4"} />
      <div
        className={
          "pb-4 md:pb-8 prose-base md:prose-lg max-w-full mt-4 prose-gray text-gray-600 dark:text-gray-200 prose-ul:list-disc prose-ol:list-decimal prose-a:underline prose-a:text-primary-600 prose-a:dark:text-primary-300"
        }
      >
        {currentPost?.content}
      </div>
    </Layout>
  );
}

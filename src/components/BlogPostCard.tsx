import { IBlogPost } from "@/content/blog";
import { Card } from "./Card";
import { dateToLongString } from "@/helpers/timeHelpers";
import { TagList } from "./TagList";

export interface BlogPostCardProps {
  post: IBlogPost;
}

export function BlogPostCard(props: BlogPostCardProps) {
  const { post } = props;

  return (
    <Card className={"w-full px-6 py-4"} href={"/blog/" + post.meta.url}>
      <>
        <h2>{post.meta.title}</h2>
        <span className={"mt-1 text-gray-600 dark:text-gray-200 text-lg"}>
          {post.meta.subtitle}
        </span>
        <div className={"flex flex-wrap justify-between items-center mt-4"}>
          <span className={"text-gray-600 dark:text-gray-200 text-md"}>
            {dateToLongString(post.meta.datePosted)}
          </span>
          {post.meta.tags && <TagList tags={post.meta.tags} />}
        </div>
      </>
    </Card>
  );
}

import { IBlogPost } from "content/blog";
import { Card } from "./Card";
import { dateToLongString } from "helpers/time-helpers";
import { TechnologyList } from "./TechnologyList";

export interface BlogPostCardProps {
  post: IBlogPost;
}

export function BlogPostCard(props: BlogPostCardProps) {
  const { post } = props;

  return (
    <Card className={"w-full mt-6 px-6 py-4"} href={"/blog/" + post.meta.url}>
      <>
        <h2>{post.meta.title}</h2>
        <span className={"mt-1 text-gray-200 text-lg"}>
          {post.meta.subtitle}
        </span>
        <div className={"flex flex-wrap justify-between items-center mt-4"}>
          <span className={" text-gray-200 text-md"}>
            {dateToLongString(post.meta.datePosted)}
          </span>
          {post.meta.tags && <TechnologyList technologies={post.meta.tags} />}
        </div>
      </>
    </Card>
  );
}

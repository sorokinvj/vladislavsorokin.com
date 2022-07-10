import React from "react";
import { Post as PostType } from "types/post";
import Image from "next/image";
import dayjs from "dayjs";
import { getColorFromTag } from "lib/getColorFromTag";

interface Props {
  post: PostType;
}

const PostFooter: React.FC<Props> = ({ post }) => (
  <>
    <p className="text-lightgrey mr-6">
      {dayjs(post.date).format("MMM D, YYYY")}
    </p>
    <p className="text-lightgrey">#{post.tag}</p>
  </>
);

const FeaturedPost = ({ post }: Props) => {
  if (!post?.thumbnail || !post?.lead) {
    console.error("Every featured post must have a thumbnail and a lead text");
    return null;
  }
  return (
    <div className="grid-container md:grid-rows-[auto_1fr_1fr] items-start">
      <div className="col-span-3 order-2 mb-6 md:col-span-3 md:order-1 md:row-span-4 md:m-0">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <div className="contents">
        <div className="col-span-3 order-1 mb-4 md:order-2 md:col-span-4">
          <h2>{post.title}</h2>
        </div>
        <p className="col-span-3 order-4 mb-4 md:col-span-4">{post.lead}</p>
        <div className="col-span-3 order-5 flex items-start md:self-end">
          <PostFooter post={post} />
        </div>
      </div>
    </div>
  );
};

export const Post: React.FC<Props> = ({ post }) => {
  if (post?.isFeatured) {
    return <FeaturedPost post={post} />;
  }

  const borderColor = getColorFromTag(post.tag);

  return (
    <div
      className="border-solid border-l-8 border-y-0 border-r-0 flex flex-col mt-12 pl-6 col-span-3 h-[110px] md:w-1/2 md:h-[145px] md:col-span-4"
      style={{ borderColor }}
    >
      <h2>{post.title}</h2>
      <div className="flex items-end grow">
        <PostFooter post={post} />
      </div>
    </div>
  );
};

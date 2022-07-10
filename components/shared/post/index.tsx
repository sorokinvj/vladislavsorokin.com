import React from "react";
import { Post as PostType } from "types/post";
import Image from "next/image";
import dayjs from "dayjs";

interface Props {
  post: PostType;
}

const FeaturedPost = ({ post }: Props) => {
  if (!post?.thumbnail || !post?.lead) {
    console.error("Every featured post must have a thumbnail and a lead text");
    return null;
  }
  return (
    <div className="grid-container">
      <div className="col-span-3 order-0 mb-6 md-col-span-5 md-order-1">
        <h2>{post.title}</h2>
      </div>
      <div className="col-span-3 order-1 mb-6 md:col-span-3 md:order-0">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <p className="col-span-3 order-2 mb-4">{post.lead}</p>
      <div className="col-span-3 order-3 flex items-start">
        <p className="text-lightgrey mr-6">
          {dayjs(post.date).format("MMM D, YYYY")}
        </p>
        <p className="text-lightgrey">#{post.tag}</p>
      </div>
    </div>
  );
};

export const Post: React.FC<Props> = ({ post }) => {
  if (post?.isFeatured) {
    return <FeaturedPost post={post} />;
  }
  return <>{post.title}</>;
};

import React from "react";
import { Post as PostType } from "types/post";

interface Props {
  post: PostType;
}

const FeaturedPost = ({ post }: Props) => {
  return (
    <div className="">
      
    </div>
  )
}

export const Post: React.FC<Props> = ({ post }) => {
  if (post?.isFeatured) {
    return <FeaturedPost post={post} />;
  }
  return <>{post.title}</>;
};

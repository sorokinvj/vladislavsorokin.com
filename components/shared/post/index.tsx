import React from "react";
import { Post as PostType } from "types/post";

interface Props {
  post: PostType;
}

export const Post: React.FC<Props> = ({ post }) => {
  return <>{post.title}</>;
};

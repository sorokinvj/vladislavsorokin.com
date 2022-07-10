import React from "react";
import { Post } from "components/shared/post";
import { Post as PostType } from "types/post";

interface Props {
  posts: PostType[];
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post: PostType) => (
        <Post post={post} key={post.slug} />
      ))}
    </>
  );
};

import React from "react";
import { Post } from "components/shared/post";
import { Post as PostType } from "types/post";

interface Props {
  posts: PostType[];
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="col-span-3 md:col-span-8 flex flex-wrap">
      {posts.map((post: PostType) => (
        <Post post={post} key={post.slug} />
      ))}
    </div>
  );
};

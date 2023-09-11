import React from "react";
import { Post } from "components/shared/post";
import { Post as PostType } from "types/post";

interface Props {
  posts: PostType[];
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="col-span-3 grid-container md:col-span-8">
      <h1 className="col-span-3 md:col-span-8 mb-10 md:mb-12">
        🍎 My insights
      </h1>
      <div className="col-span-3 gap-4 md:col-span-8 flex flex-wrap justify-between">
        {posts.map((post: PostType) => (
          <Post post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
};

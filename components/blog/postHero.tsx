import { PostDateTag } from "components/shared/post";
import { Post } from "types/post";
import Image from "next/image";

type Props = {
  post: Post;
};

export const PostHero = ({ post }: Props) => {
  return (
    <div className="col-span-3 md:col-span-8 md:grid-container">
      <div className="relative flex flex-col h-48 md:col-span-8 md:h-96">
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-start mt-14 md:col-start-2 md:col-end-8">
        <PostDateTag post={post} />
      </div>
      <h1 className="text-3xl md:text-4xl md:col-start-2 md:col-end-8">
        {post.title}
      </h1>
    </div>
  );
};

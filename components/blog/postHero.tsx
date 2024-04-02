import { PostDateTag } from "components/shared/post";
import { Post } from "types/post";
import Image from "next/image";

type Props = {
  post: Post;
};

export const PostHero = ({ post }: Props) => {
  return (
    <div className="col-span-3 md:col-span-8 grid-container">
      <div
        className="relative flex flex-col col-span-3 h-48 md:col-span-8 md:h-[450px]"
        style={{ boxShadow: "0 0 11px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          objectPosition="0% 0%"
          priority
        />
      </div>
      <div className="flex items-start mt-8 col-span-3 md:col-start-2 md:col-end-8">
        <PostDateTag post={post} />
      </div>
      <h1 className="font-bold text-3xl mt-2 md:text-4xl col-span-3 md:col-start-2 md:col-end-8">
        {post.title}
      </h1>
    </div>
  );
};

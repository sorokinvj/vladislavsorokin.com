import React from "react";
import { Post as PostType } from "types/post";
import Image from "next/image";
import { getColorFromTag } from "lib/getColorFromTag";
import DateFormatter from "components/shared/dateFormatter";
import Link from "next/link";

export interface Props {
  post: PostType;
}

export const PostDateTag: React.FC<Props> = ({ post }) => (
  <>
    <p className="text-lightgrey mr-6">
      <DateFormatter dateString={post.date} />
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
    <Link href={`/posts/${post.slug}`} passHref>
      <a className="no-underline text-black grid-container md:grid-rows-[auto_1fr_1fr] items-start mb-6">
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
            <h2 className="font-normal">{post.title}</h2>
          </div>
          <p className="col-span-3 order-4 mb-4 md:col-span-4 md:text-lg">
            {post.lead}
          </p>
          <div className="col-span-3 order-5 flex items-start md:self-end">
            <PostDateTag post={post} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export const Post: React.FC<Props> = ({ post }) => {
  console.log("post", post.title);
  if (post?.isFeatured) {
    return <FeaturedPost post={post} />;
  }

  return (
    <Link href="/posts/[slug]" as={`/posts/${post.slug}`} passHref>
      <a
        className="no-underline border-solid border-l-8 border-y-0 border-r-0 flex flex-col first:mt-0 mt-12 pl-6 col-span-3 md:mt-0 md:w-[48%] md:min-h-[145px] md:col-span-4"
        style={{ borderColor: getColorFromTag(post.tag) }}
      >
        <h2 className="font-normal text-2xl text-gray-700">{post.title}</h2>
        <div className="flex items-end grow mt-4">
          <PostDateTag post={post} />
        </div>
      </a>
    </Link>
  );
};

import { getAllPosts, getPostBySlug } from "lib/api";
import { markdownToHtml } from "lib/markdownToHtml";
import { useRouter } from "next/router";
import React from "react";
import { Post } from "types/post";
import ErrorPage from "next/error";
import { PostPageMeta } from "components/blog/meta";
import { PostHero } from "components/blog/postHero";
import PostBody from "components/blog/post-body";

type Props = {
  post: Post;
  // morePosts: Post[];
  // preview?: boolean;
};

const PostPage: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="pt-12 pb-20">
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <PostPageMeta post={post} />
          <article className="grid-container">
            <PostHero post={post} />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </div>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "lead",
    "date",
    "tag",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export default PostPage;

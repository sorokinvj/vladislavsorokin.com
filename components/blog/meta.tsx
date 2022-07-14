import Head from "next/head";
import { Post } from "types/post";

type Props = {
  post: Post;
};

export const PostPageMeta: React.FC<Props> = ({ post }) => (
  <Head>
    <title>Vladislav Sorokin</title>
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.lead} />
    <meta property="og:image" content={post.ogImage || post.coverImage} />
    <meta
      property="og:url"
      content={"https://vladislavsorokin.com/posts/" + post.slug}
    />
    <meta property="og:type" content="article" />
  </Head>
);

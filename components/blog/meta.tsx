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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200;300;400&display=swap"
      rel="stylesheet"
    />
  </Head>
);

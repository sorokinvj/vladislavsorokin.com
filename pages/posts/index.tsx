import Container from "components/shared/container";
import MoreStories from "components/blog/more-stories";
import HeroPost from "components/blog/hero-post";
import { getAllPosts } from "lib/api";
import Head from "next/head";
import { Post } from "types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Vladislav Sorokin</title>
      </Head>
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date.toString()}
            slug={heroPost.slug}
            excerpt={heroPost?.lead}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts({
    fields: ["title", "date", "coverImage", "lead"],
  });

  return {
    props: { allPosts },
  };
};

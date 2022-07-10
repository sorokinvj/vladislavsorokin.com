import { Intro } from "components/mainpage/intro";
import { MainPageMeta } from "components/mainpage/meta";
import { getAllPosts, getMainPageContent } from "lib/api";
import { markdownToHtml } from "lib/markdownToHtml";
import { MainPage } from "types/mainPage";
import { Post } from "components/shared/post";
import { Post as PostType } from "types/post";

type Props = {
  page: MainPage;
};

const Index: React.FC<Props> = ({ page }) => {
  console.log(page.posts);
  return (
    <>
      <MainPageMeta meta={page.data.meta} />
      <Intro page={page} />
      {page.posts.map((post: PostType) => (
        <Post post={post} key={post.slug} />
      ))}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const mainPage = getMainPageContent();
  const intro = await markdownToHtml(mainPage.content || "");
  const posts = getAllPosts({
    fields: ["title", "date", "thumbnail", "lead", "isFeatured"],
    sortedBy: ["isFeatured", "date"],
  });

  return {
    props: {
      page: {
        data: mainPage.data,
        intro,
        posts,
      },
    },
  };
};

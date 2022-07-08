import { Intro } from "components/mainpage/intro";
import { MainPageMeta } from "components/mainpage/meta";
import { getAllPosts, getMainPageContent } from "lib/api";
import { markdownToHtml } from "lib/markdownToHtml";
import { MainPage } from "types/mainPage";
import { Posts } from "components/mainpage/posts";

type Props = {
  page: MainPage;
};

const Index: React.FC<Props> = ({ page }) => (
  <>
    <MainPageMeta meta={page.data.meta} />
    <Intro page={page} />
    <Posts posts={page.posts} />
  </>
);

export default Index;

export const getStaticProps = async () => {
  const mainPage = getMainPageContent();
  const intro = await markdownToHtml(mainPage.content || "");
  const posts = getAllPosts(["title", "date", "thumbnail", "lead"]);
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

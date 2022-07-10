import { Intro } from "components/mainpage/intro/intro";
import { MainPageMeta } from "components/mainpage/meta";
import { Posts } from "components/mainpage/posts";
import { getAllPosts, getMainPageContent } from "lib/api";
import { markdownToHtml } from "lib/markdownToHtml";
import { MainPage } from "types/mainPage";

type Props = {
  page: MainPage;
};

const Index: React.FC<Props> = ({ page }) => (
  <>
    <MainPageMeta meta={page.data.meta} />
    <Intro page={page} />
    <div className="col-span-3 md:col-span-8">
      <Posts posts={page.posts} />
    </div>
  </>
);

export default Index;

export const getStaticProps = async () => {
  const mainPage = getMainPageContent();
  const intro = await markdownToHtml(mainPage.content || "");
  const posts = getAllPosts({
    fields: ["title", "date", "thumbnail", "lead", "isFeatured", "tag"],
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

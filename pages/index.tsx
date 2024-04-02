import { Intro } from "components/mainpage/intro/intro";
import { MainPageMeta } from "components/mainpage/meta";
import { Posts } from "components/mainpage/posts";
import { getAllPosts, getMainPageContent } from "lib/api";
import { MainPage } from "types/mainPage";
import { GetStaticProps } from "next";
import { Projects } from "components/mainpage/projects";

type Props = {
  page: MainPage;
};

const Index: React.FC<Props> = ({ page }) => (
  <div className="flex flex-col gap-16">
    <MainPageMeta meta={page.data.meta} />
    <Intro />
    <Projects />
    <Posts posts={page.posts} />
  </div>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const mainPage = getMainPageContent();
  const posts = getAllPosts({
    fields: ["title", "date", "thumbnail", "lead", "isFeatured", "tag"],
    sortedBy: ["isFeatured", "date"],
  });

  return {
    props: {
      page: {
        data: mainPage.data,
        posts,
      },
    },
  };
};

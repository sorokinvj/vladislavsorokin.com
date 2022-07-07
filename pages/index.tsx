import { Intro } from "components/mainpage/intro";
import { MainPageMeta } from "components/mainpage/meta";
import { getMainPageContent } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import { MainPage } from "types/mainPage";

type Props = {
  page: MainPage;
};

const Index: React.FC<Props> = ({ page }) => (
  <>
    <MainPageMeta meta={page.data.meta} />
    <Intro page={page} />
  </>
);

export default Index;

export const getStaticProps = async () => {
  const mainPage = getMainPageContent();
  const content = await markdownToHtml(mainPage.content || "");
  return {
    props: {
      page: {
        data: mainPage.data,
        content,
      },
    },
  };
};

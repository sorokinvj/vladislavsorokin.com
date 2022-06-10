import { MainPageMeta } from "components/mainpage/meta";
import Container from "components/shared/container";
import Layout from "components/shared/layout";
import { getMainPageContent } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Image from "next/image";
import { MainPageContent } from "types/mainpagecontent";
import markdownStyles from "styles/markdown.module.css";

type Props = {
  page: MainPageContent;
};

const Index: React.FC<Props> = ({ page }) => (
  <Container className="lg:columns-2 max-w-6xl lg:mt-28">
    <MainPageMeta />
    <Image
      src={page.data.authorImage}
      priority
      alt="Photo of Vladislav Sorokin"
      width="600"
      height="450"
    />
    <Container className="p-12 break-before-column">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </Container>
  </Container>
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

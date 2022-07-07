import { MainPageMeta } from "components/mainpage/meta";
import { getMainPageContent } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Image from "next/image";
import { MainPage } from "types/mainPage";
import markdownStyles from "styles/markdown.module.css";
import cn from "classnames";

type Props = {
  page: MainPage;
};

const Index: React.FC<Props> = ({ page }) => (
  <>
    <MainPageMeta meta={page.data.meta} />
    <div className="col-span-3 flex flex-col items-center mt-12 mb-20">
      <div className="mb-10">
        <Image
          src={page.data.authorImage}
          priority
          alt="Photo of Vladislav Sorokin"
          width={156}
          height={156}
        />
      </div>
      <div
        className={cn(markdownStyles["intro"], "text-center mx-auto")}
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
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

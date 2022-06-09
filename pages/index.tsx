import { MainPageMeta } from "components/mainpage/meta";
import Container from "components/shared/container";
import Layout from "components/shared/layout";

const Index = () => {
  return (
    <Layout>
      <MainPageMeta />
      <h1>Hi there 👋</h1>
      <div>
        I am Vladislav, professional software developer, amateur artist,
        beginner chess player and just a curious person living in a beautiful
        Praia das Macas, Portugal. If you came here to hire me, here you could
        find all the info needed - cv, portfolio and my developer’s blog. If you
        want to know me better, here you could read about me and what I consider
        my current mission: to help entrepreneurs automate mundane tasks, have
        more free time and enjoy life. You can find me on Twitter, GitHub or
        email me at sorokinvj@gmail.com
      </div>
    </Layout>
  );
};

export default Index;

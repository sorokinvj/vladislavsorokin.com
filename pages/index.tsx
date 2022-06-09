import { MainPageMeta } from "components/mainpage/meta";
import Container from "components/shared/container";
import Layout from "components/shared/layout";
import Image from "next/image";
import authorImg from "public/assets/images/onazanhadomar.png";

const Index = () => {
  return (
    <Layout className="lg:columns-2 md:p-12">
      <MainPageMeta />
      <Image
        src={authorImg}
        priority
        alt="picture of Vladislav Sorokin"
        width={600}
        height={450}
      />
      <Container className="p-12 break-before-column">
        <h1 className="text-3xl">Hi there 👋</h1>
        <div className="font-light pt-6">
          I am Vladislav, professional software developer, amateur artist,
          beginner chess player and just a curious person living in a beautiful
          Praia das Macas, 🇵🇹. If you came here to hire me, here you could find
          all the info needed - cv, portfolio and my developer’s blog. If you
          want to know me better, here you could read about me and what I
          consider my current mission: to help entrepreneurs automate mundane
          tasks, have more free time and enjoy life. You can find me
          on Twitter, GitHub or email me at sorokinvj@gmail.com
        </div>
      </Container>
    </Layout>
  );
};

export default Index;

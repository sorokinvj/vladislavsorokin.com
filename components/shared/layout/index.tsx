import { Navigation } from "../navigation";
import { GlobalMeta } from "../navigation/globalMeta";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalMeta />
      <div className="px-4 md:px-8 w-full md:max-w-4xl md:mx-auto">
        <Navigation />
        <main className="mt-16 md:my-20">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

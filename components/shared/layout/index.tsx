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
      <div className="p-4 md:p-0 md:max-w-4xl md:mx-auto">
        <Navigation />
        <main className="my-12 md:my-20">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

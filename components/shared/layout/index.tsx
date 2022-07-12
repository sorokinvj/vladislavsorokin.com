import { Navigation } from "../navigation";
import { Footer } from "./footer";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ className, children }: Props) => {
  return (
    <>
      <div className="p-4 md:p-0 md:max-w-4xl md:mx-auto">
        <Navigation />
        <main className="my-18 md:my-20">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

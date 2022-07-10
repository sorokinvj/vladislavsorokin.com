import { Navigation } from "../navigation";
import { Footer } from "./footer";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ className, children }: Props) => {
  return (
    <>
      <div className="p-4 md:max-w-4xl md:mx-auto">
        <Navigation />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

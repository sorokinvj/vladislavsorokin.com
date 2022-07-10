import { Navigation } from "../navigation";
import { Footer } from "./footer";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ className, children }: Props) => {
  return (
    <>
      <div className="grid-container px-4 md:max-w-4xl md:mx-auto">
        <Navigation />
        <main className="col-span-3 md:col-span-8">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

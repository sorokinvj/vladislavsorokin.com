import { Navigation } from "../navigation";
import { Footer } from "./footer";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ className, children }: Props) => {
  return (
    <>
      <div className="grid-container md:max-w-4xl md:mx-auto">
        <Navigation />
        <main className="col-start-1 col-end-4 md:col-end-9">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

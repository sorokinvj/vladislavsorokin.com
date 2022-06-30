import Alert from "../../blog/alert";
import Footer from "../../blog/footer";
import Meta from "../../blog/meta";
import cn from "classnames";
import { Navigation } from "../navigation";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ className, children }: Props) => {
  return (
    <div className="w-full grid grid-cols-3 gap-x-4 p-4 md:max-w-4xl md:w-md:grid-cols-8 md:gap-x-10 md:mr-auto md:ml-auto">
      <Navigation />
      <main className="col-start-1 col-end-4 md:col-end-9">{children}</main>
    </div>
  );
};

export default Layout;

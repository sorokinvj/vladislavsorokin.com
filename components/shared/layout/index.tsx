import Alert from "../../blog/alert";
import Footer from "../../blog/footer";
import Meta from "../../blog/meta";
import cn from "classnames";

type Props = {
  preview?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Layout = ({ preview, className, children }: Props) => {
  return (
    <>
      <Meta />
      <div className={cn("min-h-screen", className)}>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

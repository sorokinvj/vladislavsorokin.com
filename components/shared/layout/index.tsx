import { Navigation } from "../navigation";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ className, children }: Props) => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-x-4 p-4 md:max-w-4xl md:w-md:grid-cols-8 md:gap-x-10 md:mr-auto md:ml-auto">
        <Navigation />
        <main className="col-start-1 col-end-4 md:col-end-9">{children}</main>
      </div>
      <footer className="w-full bg-neutral-50 p-4 py-20 ">
        <p className="font-title text-4xl text-darkgrey mb-8">
          Vladislav Sorokin
        </p>
        <p className="text-darkgrey font-sans text-base leading-6">
          You can find me on{" "}
          <a href="twitter.com/sorokinvj" rel="noopener noreferrer">
            Twitter
          </a>
          ,{" "}
          <a href="github.com/sorokinvj" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          or email me at{" "}
          <a href="mailto:sorokinvj@gmail.com">sorokinvj@gmail.com</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;

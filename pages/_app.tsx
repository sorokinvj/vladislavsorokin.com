import { AppProps } from "next/app";
import "styles/index.css";
import "styles/fonts.css";
import { Navigation } from "components/shared/navigation";
import Layout from "components/shared/layout";
// import Meta from "components/blog/meta";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <GlobalMeta /> */}
      <Component {...pageProps} />
    </Layout>
  );
}

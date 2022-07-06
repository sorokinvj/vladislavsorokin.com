import { AppProps } from "next/app";
import "styles/index.css";
import "styles/fonts.css";
import Layout from "components/shared/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import { AppProps } from "next/app";
import "styles/index.css";
import "styles/fonts.css";
import "styles/code.css";
import Layout from "components/shared/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "lib/gtm";
import { GoogleTagManager } from "components/shared/gtm/Gtm";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <Layout>
      <GoogleTagManager />
      <Component {...pageProps} />
    </Layout>
  );
}

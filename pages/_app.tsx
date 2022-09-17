import { AppProps } from "next/app";
import "styles/index.css";
import "styles/fonts.css";
import "styles/code.css";
import Layout from "components/shared/layout";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { GTM_ID, pageview } from "../lib/gtm";

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
      {GTM_ID && (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
          }}
        />
      )}
      <Component {...pageProps} />
    </Layout>
  );
}

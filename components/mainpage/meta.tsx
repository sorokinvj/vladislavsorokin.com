import Head from "next/head";
import { PageMeta } from "types/pageMeta";

type Props = {
  meta: PageMeta;
};

export const MainPageMeta: React.FC<Props> = ({ meta }) => (
  <Head>
    <title>Vladislav Sorokin</title>
    <meta property="og:title" content={meta.ogTitle} />
    <meta property="og:description" content={meta.ogDescription} />
    <meta property="og:image" content={meta.ogImage} />
    <meta property="og:url" content={meta.ogUrl} />
    <meta property="og:type" content={meta.ogType} />
  </Head>
);

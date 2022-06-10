import { PageMeta } from "./pageMeta";

export interface MainPage {
  data: {
    authorImage: string;
    meta: PageMeta;
  };
  content: string;
}

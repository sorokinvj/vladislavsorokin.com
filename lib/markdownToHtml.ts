import { remark } from "remark";
import remarkFigureCaption from "@microflash/remark-figure-caption";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeStarryNight from "./rehypeStarryNight";

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkFigureCaption)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStarryNight)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}

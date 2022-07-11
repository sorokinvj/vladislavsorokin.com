import { remark } from "remark";
import remarkFigureCaption from "@microflash/remark-figure-caption";
import rehypePrism from "@mapbox/rehype-prism";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkFigureCaption)
    .use(remarkRehype)
    .use(rehypePrism, {
      plugins: ["autoloader", "highlight-keywords", "show-language"],
    })
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

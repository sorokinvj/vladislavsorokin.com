import markdownStyles from "./postBody.module.css";
import cn from "classnames";

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div
      className={cn("grid-container", markdownStyles.body)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

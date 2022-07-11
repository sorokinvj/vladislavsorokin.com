import markdownStyles from "./postBody.module.css";

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div
      className={markdownStyles["body"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

import { Props } from ".";
import DateFormatter from "../dateFormatter";

export const PostDateTag: React.FC<Props> = ({ post }) => (
  <>
    <p className="text-lightgrey mr-6">
      <DateFormatter dateString={post.date} />
    </p>
    <p className="text-lightgrey">#{post.tag}</p>
  </>
);

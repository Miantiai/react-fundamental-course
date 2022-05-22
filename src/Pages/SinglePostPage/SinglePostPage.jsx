import SinglePost from '../../components/SinglePost/SinglePost';
import CommentsListForSinglePost from '../../components/CommentsListForSinglePost/CommentsListForSinglePost';

export default function SinglePostPage() {
  return (
    <div>
      <SinglePost />
      <CommentsListForSinglePost />
    </div>
  );
}

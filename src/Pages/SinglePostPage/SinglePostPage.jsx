import SinglePost from '../../components/SinglePost/SinglePost';
import s from './SinglePostPage.module.css';
import CommentsListForSinglePost from '../../components/CommentsListForSinglePost/CommentsListForSinglePost';

export default function SinglePostPage() {
  return (
    <div>
      <div className={s.SinglePost}>
        <SinglePost />
      </div>
      <CommentsListForSinglePost />
    </div>
  );
}

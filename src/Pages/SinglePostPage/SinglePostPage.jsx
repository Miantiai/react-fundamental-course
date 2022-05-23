<<<<<<< Updated upstream
import SinglePost from '../../components/SinglePost/SinglePost';
import CommentsListForSinglePost from '../../components/CommentsListForSinglePost/CommentsListForSinglePost';
=======
import s from './SinglePostPage.module.css';
import CommentsListForSinglePost from '../../components/CommentsListForSinglePost/CommentsListForSinglePost';
import SinglePost from '../../components/SinglePost/SinglePost';
>>>>>>> Stashed changes

export default function SinglePostPage() {
  return (
    <div>
<<<<<<< Updated upstream
      <SinglePost />
      <CommentsListForSinglePost />
=======
      <div className={s.SinglePost}>
        <SinglePost />
      </div>

      <div className={s.CommentsListForSinglePost}>
        <CommentsListForSinglePost />
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

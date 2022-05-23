<<<<<<< HEAD
<<<<<<< Updated upstream
import s from './CommentForSinglePost.module.css';

export default function CommentForSinglePost({ comment }) {
  return (
    <div className={s.CommentForSinglePost}>
      <h5 className={s.h5}>{comment.email}</h5>
      <div>{comment.body}</div>
=======
export default function CommentForSinglePost({ comment }) {
  return (
    <div>
      <h5>{comment.email}</h5>
      <div>{comment.</div>
>>>>>>> Stashed changes
=======
import s from './CommentForSinglePost.module.css';

export default function CommentsForSinglePost({ comment }) {
  return (
    <div className={s.comments}>
      <h5 className={s.h5}>{comment.email}</h5>
      <div>{comment.body}</div>
>>>>>>> f357db09a30142a400d21635dd7ce780c9866292
    </div>
  );
}

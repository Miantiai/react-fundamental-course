import s from './CommentForSinglePost.module.css';

export default function CommentForSinglePost({ comment }) {
  return (
    <div className={s.CommentForSinglePost}>
      <h5 className={s.h5}>{comment.email}</h5>
      <div>{comment.body}</div>
    </div>
  );
}

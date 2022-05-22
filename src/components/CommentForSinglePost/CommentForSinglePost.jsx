import s from './CommentForSinglePost.module.css';

export default function CommentsForSinglePost({ comment }) {
  return (
    <div className={s.comments}>
      <h5 className={s.h5}>{comment.email}</h5>
      <div>{comment.body}</div>
    </div>
  );
}

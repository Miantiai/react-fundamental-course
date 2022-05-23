import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import CommentForSinglePost from '../CommentForSinglePost/CommentForSinglePost';
import Loader from '../UI components/Loader/Loader';
import s from './CommentsListForSinglePost.module.css';

export default function CommentsListForSinglePost() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  const [fetchCommentsByPostId, commentsIsLoading, commentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchCommentsByPostId(id);
  }, []);

  return (
    <div className={s.CommentsListForSinglePost}>
      {commentsIsLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={s.title}>Comments</h3>
          {comments.map((comment) => (
            <div className={s.comment} key={comment.id}>
              <CommentForSinglePost comment={comment} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

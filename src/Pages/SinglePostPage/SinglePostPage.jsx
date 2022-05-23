<<<<<<< HEAD
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
=======
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import Loader from '../../components/UI components/Loader/Loader';
import s from './SinglePostPage.module.css';
import useFetching from '../../hooks/useFetching';
import CommentForSinglePost from '../../components/CommentForSinglePost/CommentForSinglePost';

export default function SinglePostPage() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const [comments, setComments] = useState([]);

  const [fetchPostById, postIsLoading, postError] = useFetching(async () => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchCommentsByPostId, commentsIsLoading, commentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchCommentsByPostId(id);
  }, []);

  return (
    <div>
      <h1>That post witch id: {post.id}</h1>
      {postIsLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}

      {commentsIsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div className={s.comment} key={comment.id}>
              <CommentForSinglePost comment={comment} />
            </div>
          ))}
        </div>
      )}
>>>>>>> f357db09a30142a400d21635dd7ce780c9866292
    </div>
  );
}

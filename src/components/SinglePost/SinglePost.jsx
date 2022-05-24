import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import Loader from '../UI components/Loader/Loader';
import s from './SinglePost.module.css';

export default function SinglePost() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const [fetchPostById, postIsLoading, postError] = useFetching(async () => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
  }, []);

  return (
    <div className={s.SinglePost}>
      {postIsLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className={s.title}>{post.title}</h2>
          <div>{post.body}</div>
        </>
      )}
    </div>
  );
}

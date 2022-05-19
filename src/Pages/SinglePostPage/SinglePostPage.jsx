import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import Loader from '../../components/UI components/Loader/Loader';
import useFetching from '../../hooks/useFetching';

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
  }, []);

  return (
    <div>
      <h1>You openned post witch id: {post.id}</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

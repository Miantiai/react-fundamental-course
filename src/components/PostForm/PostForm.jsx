import { useState } from 'react';
import Input from '../UI components/Input/Input';
import Button from '../UI components/Button/Button';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <Input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Post name"
      />
      <Input
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Post description"
      />
      <Button onClick={addNewPost} disablded="true">
        Create post
      </Button>
    </form>
  );
};

export default PostForm;

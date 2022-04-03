import { useState } from 'react';
import PostList from './components/PostList/PostList';
import Button from './components/UI components/Button/Button';
import Input from './components/UI components/Input/Input';
import './styles/index.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScrpt', body: 'description' },
    { id: 2, title: 'JavaScrpt 2', body: 'description' },
    { id: 3, title: 'JavaScrpt 3', body: 'description' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <form>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post name"
        />
        <Input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post description"
        />
        <Button onClick={addNewPost} disablded="true">
          Create post
        </Button>
      </form>
      <PostList posts={posts} title={'Post list'} />
    </div>
  );
}
export default App;

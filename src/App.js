import { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import './styles/index.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: 'JavaScrpt', body: 'description' },
    { id: 1, title: 'JavaScrpt 2', body: 'description' },
    { id: 2, title: 'JavaScrpt 3', body: 'description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title={'Post list'} />
    </div>
  );
}
export default App;

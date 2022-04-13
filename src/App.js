import { useState } from 'react';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import Button from './components/UI components/Button/Button';
import Modal from './components/UI components/Modal/Modal';
import usePosts from './hooks/usePosts.js';
import './styles/index.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', quary: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.quary);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((posts) => posts.id !== post.id));
  }

  return (
    <div className="App">
      <Button style={{ marginTop: 10 }} onClick={() => setModal(true)}>
        Create post
      </Button>
      <Modal visibility={modal} setVisibility={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: '15px 0', }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Post list'}
      />
    </div>
  );
}

export default App;

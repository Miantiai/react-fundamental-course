import { useState, useMemo } from 'react';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import Button from './components/UI components/Button/Button';
import Modal from './components/UI components/Modal/Modal';
import './styles/index.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: 'A', body: 'C' }, //it object have name - post
    { id: 1, title: 'B', body: 'B' },
    { id: 2, title: 'C', body: 'A' },
  ]);
  const [filter, setFilter] = useState({ sort: '', quary: '' });
  const [modal, setModal] = useState(false);
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.quary)
    );
  }, [filter.quary, sortedPosts]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((posts) => posts.id !== post.id));
  }

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Create post</Button>
      <Modal modal={modal} setModal={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: '15px 0' }} />
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

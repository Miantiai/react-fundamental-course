import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import Button from './components/UI components/Button/Button';
import Modal from './components/UI components/Modal/Modal';
import Loader from './components/UI components/Loader/Loader';
import usePosts from './hooks/usePosts.js';
import useFetching from './hooks/useFetching.js';
import { getPageCount, getPagesArray } from './utils/pages';
import './styles/index.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', quary: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.quary);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const pagesArray = getPagesArray(totalPages);
  const [postsFetching, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
    setPosts(response.data);
  });

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((posts) => posts.id !== post.id));
  }

  useEffect(() => {
    postsFetching();
  }, [page]);

  return (
    <div className="App">
      <Button style={{ marginTop: 10 }} onClick={() => setModal(true)}>
        Create post
      </Button>
      <Modal visibility={modal} setVisibility={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h2>Error: {postError}</h2>}

      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'Post list'}
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            className={p === page ? 'page page__current' : 'page'}
            key={p}
            onClick={() => setPage(p)}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;

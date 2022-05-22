import { useState, useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import useFetching from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import Button from '../components/UI components/Button/Button';
import Modal from '../components/UI components/Modal/Modal';
import Pagination from '../components/UI components/Pagination/Pagination';
import Loader from '../components/UI components/Loader/Loader';
import PostForm from '../components/PostForm/PostForm';
import PostFilter from '../components/PostFilter/PostFilter';
import PostList from '../components/PostList/PostList';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', quary: '' });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.quary);

  const [totalPages, setTotalPages] = useState(0); // 10

  const [limit] = useState(10);

  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
      setPosts(response.data);
    }
  );

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((posts) => posts.id !== post.id));
  }

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  function changePage(page) {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="Posts">
      <Button style={{ marginTop: 10 }} onClick={() => setModal(true)}>
        Create post
      </Button>

      <Modal visibility={modal} setVisibility={setModal}>
        <PostForm create={createPost} />
      </Modal>

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
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;

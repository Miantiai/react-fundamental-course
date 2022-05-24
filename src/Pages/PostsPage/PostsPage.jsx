import { useState, useEffect, useRef } from 'react';
import usePosts from '../../hooks/usePosts';
import useFetching from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { getPageCount } from '../../utils/pages';
import Button from '../../components/UI components/Button/Button';
import Modal from '../../components/UI components/Modal/Modal';
import Loader from '../../components/UI components/Loader/Loader';
import PostForm from '../../components/PostForm/PostForm';
import PostFilter from '../../components/PostFilter/PostFilter';
import PostList from '../../components/PostList/PostList';
import s from './PostsPage.module.css';
import { useObserver } from '../../hooks/useObserver';
import Select from '../../components/UI components/Select/Select';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', quary: '' });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.quary);

  const [totalPages, setTotalPages] = useState(0); // 10

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
      setPosts([...posts, ...response.data]);
    }
  );

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((posts) => posts.id !== post.id));
  }

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className={s.PostsPage}>
      <Modal visibility={modal} setVisibility={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <div className={s.ButtonCreatePost}>
        <Button onClick={() => setModal(true)}>Create post</Button>
      </div>
      <div className={s.pageSelect}>
        <Select
          value={limit}
          onChange={(value) => {
            setLimit(value);
          }}
          defaultValue="Elements on page"
          options={[
            { value: 5, name: '5' },
            { value: 15, name: '15' },
            { value: 25, name: '25' },
            { value: -1, name: 'Show all' },
          ]}
        />
      </div>
      {postError && <h2>Error: {postError}</h2>}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Post list'}
      />

      <div ref={lastElement} />

      {isPostsLoading && (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
}

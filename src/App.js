import { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import Input from './components/UI components/Input/Input';
import Select from './components/UI components/Select/Select';
// import Select from './components/UI components/Select/Select';
import './styles/index.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: 'A', body: 'C' }, //it object have name - post
    { id: 1, title: 'B', body: 'B' },
    { id: 2, title: 'C', body: 'A' },
  ]);

  const [selectedSort, setSelectedSort] = useState('Пустая строка');

  //Function that create new post
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  //Function for deleting post at buttton click
  function removePost(post) {
    setPosts(posts.filter((posts) => posts.id !== post.id));
  }

  //Functon for sorting a array posts  by the value user-selected option
  //sort is a parametr to which to assign data an he don't needing in
  function sortPosts(sort) {
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <Input style={{width: '20em'}} place/>
      <Select
        defaultValue="Сортировка:"
        onChange={sortPosts}
        options={[
          { name: 'По названию', value: 'title' },
          { name: 'По описанию', value: 'body' },
        ]}
      />

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={'Post list'} />
      ) : (
        <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      )}
    </div>
  );
}

export default App;

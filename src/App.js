import React, { useState } from 'react';
import PostList from './components/PostList/PostList';
import './styles/App.css';
import FormInput from './components/UI components/FormInput/FormInput.jsx';
import FormButton from './components/UI components/FormButton/FormButton.jsx';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: 'title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
    },
  ]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  //function for add post in PostList
  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description
    }
    setPosts([...posts, newPost])
    setTitle('')
    setDescription('')
  }





  return (
    <div className='App'>
      <form className='FormAddPosts'>
        <FormInput
          value={title}
          placeholder='Name'
          onChange={e => setTitle(e.target.value)}
          tabIndex={1}
        />
        <FormInput
          value={description}
          placeholder='Description'
          onChange={e => setDescription(e.target.value)}
          tabIndex={2}
        />
        <div>
          <FormButton onClick={addPost} tabIndex={3}>Add post</FormButton></div>
      </form>
      <PostList posts={posts} title='Post List'/>
    </div>
  )
}
    
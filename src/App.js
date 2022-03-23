import React, { useState } from 'react';
import PostList from './components/PostList/PostList';
import './styles/App.css'
import FormButton from './components/UI components/FormButton/FormButton';
import FormInput from './components/UI components/FormInput/FormInput';



export default function App() { 
  const [posts, setPosts] = useState([
    {
      id: 0, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
    },

    {
      id: 1, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
    },
    
    {
      id: 2, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
    },
  ]);

  return (
    // Here I created form for adding posts stylized it using css modules
    <div className='App'>
      <form className='FormAddPosts'>
        {/* FormInput and FormButton it's UI component what I created */}
        <FormInput placeholder='Post name'/>
        <FormInput placeholder='Post desription'/>
        <div><FormButton disabled>Add post</FormButton></div>
      </form>
      <PostList posts={posts} title='Post List'/>
    </div>

    
  )
}
    
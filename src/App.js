import React, { useState } from 'react';
import PostItem from './components/PostItem'
import './styles/App.css'

export default function App() {
    // The useState wich array and objects  
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

      {
        id: 3, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
      },

      {
        id: 4, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
      },

      {
        id: 5, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
      },

      {
        id: 6, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
        
      },

      {
        id: 7, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
      },

      {
        id: 8, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
      },

      {
        id: 9, title: 'title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta distinctio beatae itaque nisi vel iste adipisci laborum et, ullam aliquam at eveniet nesciunt quo quis eum quibusdam praesentium sit nobis hic quam. Ea quas, aperiam vel voluptates voluptatibus commodi cumque ratione id cupiditate pariatur nesciunt deleniti veritatis impedit! Nostrum officiis ut aspernatur ex error expedita officia rem blanditiis voluptatibus. Quae, aut tenetur suscipit cum ratione expedita maxime molestias quis! Architecto odit ea consectetur pariatur quidem molestias aut debitis laudantium, magni quibusdam veritatis voluptas iusto error itaque, optio totam culpa animi velit blanditiis sunt cupiditate commodi ab ipsa! Ipsa, consectetur.'
      },
    ]);
    

    return (
    <div className='App'>
      <h1 style={{textAlign: 'center'}}>Posts List</h1>
      {/* The function 'map' that transformation array to another array  */}
      {posts.map(post => 
        <div>
          <PostItem post={post} key={post.id} />
        </div>
      )}
    </div>

    
  )
}
    
import React from 'react';
import PostItem from '../PostItem/PostItem'


export default function PostList(props) {
 
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {props.title}
      </h1>
      {props.posts.map((post, index) => 
        <PostItem
          number={index + 1}
          post={post} 
          key={post.id}
        />
      )}
    </div>
  )
}

import React from 'react';
import PostItem from '../PostItem/PostItem'
// {posts, title, id}
export default function PostList({posts, title, id}) {
  // console.log();
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      {posts.map((post) => 
        <PostItem post={post} key={id} />
      )}
    </div>
  )
}

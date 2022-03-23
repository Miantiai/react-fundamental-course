import React from 'react';
import'./PostItem.css';

export default function PostItem(props, module) {
  return (
    <div>
      <div className="PostItem">
      
        <div className="PostItem__content">
          <header>{props.post.id}. {props.post.title}</header>
          <div>{props.post.description}</div>
        </div>
        
        <div className="PostItem__buttons">
          <button className='PostItem__buttonLike'>Like</button> 
          <button className='PostItem__buttonDislike'>Dislike</button>
        </div>

      </div>
    </div>
  )
}

import React, { useState } from 'react';
import style from './style.css'

export default function PostItem(props) {
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

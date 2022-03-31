import React from 'react';
import './style.css';
import s from './PostItem.module.css'

export default function PostItem({post, number}) {
  return (
      <div className={s.postItem}>
      
        <div className={s.content}>
          <header className={s.header}>{number}. {post.title}</header>
          <span className={s.contentDescription}>{post.description}</span>
        </div>
        
        <div className={s.buttons}>
          <button className={s.buttonLike}>Like</button> 
          <button className={s.buttonDislike}>Dislike</button>
        </div>

      </div>
  )
}

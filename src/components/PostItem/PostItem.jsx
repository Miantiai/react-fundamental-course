import React from 'react';
import Button from '../UI components/Button/Button';
import s from './postItem.module.css';

export default function PostItem(props) {
  return (
    <div className={s.post}>
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => props.remove(props.post)}>Delete</Button>
      </div>
    </div>
  );
}

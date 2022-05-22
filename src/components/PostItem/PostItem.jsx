import React from 'react';
import Button from '../UI components/Button/Button';
import s from './postItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function PostItem(props) {
  const navigate = useNavigate();

  return (
    <div className={s.post}>
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>

      <div className={s.btns}>
        <div className={s.Button}>
          <Button onClick={() => navigate(`/posts/${props.post.id}`)}>
            Open
          </Button>
        </div>
        <div className={s.Button}>
          <Button onClick={() => props.remove(props.post)}>Delete</Button>
        </div>
      </div>
    </div>
  );
}

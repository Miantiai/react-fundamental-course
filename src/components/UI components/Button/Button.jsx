import React from 'react';
import s from './Button.module.css';
// ...props it all other props not listed

// children it props needing for rendering button name 'Add post'
// app.js: <div><Button disabled>Add post</Button></div>

export default function Button({ children, ...props }) {
  return (
    // Here I using css module it needing so what React created unique className for isolation css
    <button {...props} className={s.Button}>
      {children}
    </button>
  );
}

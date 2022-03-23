import React from 'react'
import classes from './FormButton.module.css'
// ...props it all other props not listed

// children it props needing for rendering button name 'Add post'
// app.js: <div><FormButton disabled>Add post</FormButton></div>


export default function FormButton({children, ...props}) {
  return (
    // Here I using css module it needing so what React created unique className for isolation css  
    <button  {...props} className={classes.FormButton} > 
      {children}
    </button>
    )
}

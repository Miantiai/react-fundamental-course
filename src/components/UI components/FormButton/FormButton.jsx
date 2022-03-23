import React from 'react'
import classes from './FormButton.module.css'

export default function FormButton({children, ...props}) {
  return (
    <button  {...props} className={classes.FormButton} >
      {children}
    </button>
    )
}

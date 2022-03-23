import React from 'react'
import classes from './FormInput.module.css'

export default function FormInput({...props}) {
  return (
    <input {...props} className={classes.FormInput} type="text" />
  )
}

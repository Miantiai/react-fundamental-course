import React from 'react';
import s from './Input.module.css';

export default function FormInput({ ...props }) {
  return <input {...props} className={s.FormInput} type="text" />;
}

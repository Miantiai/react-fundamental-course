import React from 'react';
import s from './Input.module.css';

export default function Input({ ...props }) {
  return <input {...props} className={s.FormInput} type="text" />;
}

import React from 'react';
import Input from '../UI components/Input/Input';
import Select from '../UI components/Select/Select';
<<<<<<< HEAD
import s from './PostFilter.module.css';
=======
import s from './PostFilter.module.css'
>>>>>>> f357db09a30142a400d21635dd7ce780c9866292

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className={s.PostFilter}>
      <Input
        style={{ width: '20em' }}
        placeholder="Search post"
        value={filter.quary}
        onChange={(e) => setFilter({ ...filter, quary: e.target.value })}
      />

      <div className={s.Select}>
        <Select
          defaultValue="Сортировка:"
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          options={[
            { name: 'По названию', value: 'title' },
            { name: 'По описанию', value: 'body' },
          ]}
        />
      </div>
    </div>
  );
}

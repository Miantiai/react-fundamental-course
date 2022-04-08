import React from 'react';

export default function Select({ options, defaultValue, onChange }) {
  // console.log(value);
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultValue}</option>

      {options.map((option) => (
        //how value I current value from object
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

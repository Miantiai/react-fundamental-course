import React from 'react';

export default function Select({ options, defaultValue, onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultValue}</option>

      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

import s from './Select.module.css';

export default function Select({ options, defaultValue, onChange }) {
  return (
    <select className={s.Select} onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultValue}</option>

      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

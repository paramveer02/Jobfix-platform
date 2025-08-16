// components/FormRowSelect.jsx
export default function FormRowSelect({
  name,
  labelText,
  list = [],
  defaultValue = "",
  onChange,
  ...rest
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="form-select"
        {...rest}
      >
        {list.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

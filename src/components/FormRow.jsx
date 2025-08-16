// components/FormRow.jsx
export default function FormRow({
  type = "text",
  name,
  labelText,
  defaultValue = "",
  onChange,
  ...rest
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        className="form-input"
        {...rest}
      />
    </div>
  );
}

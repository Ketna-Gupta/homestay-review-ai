/**
 * Input Component
 * Props:
 * - type: Input field type
 * - placeholder: Text shown inside input
 * - value: Current input value
 * - onChange: Function to handle input changes
 */

function Input({
  type = "text",
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border px-3 py-2 rounded w-full"
    />
  );
}

export default Input;
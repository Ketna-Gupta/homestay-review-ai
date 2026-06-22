/**
 * Button Component
 * Props:
 * - children: Text displayed inside button
 * - onClick: Function called when button is clicked
 * - variant: Button type/style
 */

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === "primary"
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
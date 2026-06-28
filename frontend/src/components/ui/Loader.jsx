/**
 * Loader Component
 * Props:
 * - size: Loader size
 */

function Loader({ size = "medium" }) {

  return (
    <div
      className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-600
      ${
        size === "small"
        ? "w-5 h-5"
        : "w-10 h-10"
      }`}
    >

    </div>
  );
}

export default Loader;
/**
 * Toast Component
 * Props:
 * - message: Toast message text
 * - type: Toast category
 */

function Toast({ message, type = "success" }) {

  return (
    <div className="p-3 rounded bg-green-200">

      {message}

    </div>
  );
}

export default Toast;
/**
 * Modal Component
 * Props:
 * - isOpen: Controls modal visibility
 * - title: Modal heading
 * - children: Modal content
 * - onClose: Function to close modal
 */

function Modal({ isOpen, title, children, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="bg-white p-5 rounded">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <div>
          {children}
        </div>

        <button
          onClick={onClose}
          className="mt-3"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default Modal;
import React from "react";
import { TbCircleXFilled } from "react-icons/tb";

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white rounded-lg p-4 relative max-w-3xl max-h-full overflow-hidden">
        <button
          className="absolute top-2 right-2 text-green-500"
          onClick={onClose}
        >
          <TbCircleXFilled size={40} />
        </button>
        <img
          src={imageUrl}
          alt="Imagen ampliada"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;

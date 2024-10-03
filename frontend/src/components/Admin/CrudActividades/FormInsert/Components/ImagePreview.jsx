import React from "react";
import { TbTrashX } from "react-icons/tb";

const ImagePreview = ({ src, size, onReset }) => (
  <div className="mt-4 border border-gray-300 rounded">
    <img
      src={src}
      alt="Vista previa de la imagen"
      className="h-48 w-full object-cover rounded-t"
    />
    <div className="p-2 flex justify-between items-center">
      <span>{`Tamaño: ${size} KB`}</span>
      <button
        type="button"
        onClick={onReset}
        className="text-red-600 hover:text-red-800"
      >
        <TbTrashX size={25} />
      </button>
    </div>
  </div>
);

export default ImagePreview;

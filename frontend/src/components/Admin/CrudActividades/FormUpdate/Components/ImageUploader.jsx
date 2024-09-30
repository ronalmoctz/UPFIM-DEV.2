
import React from "react";
import { MdDelete } from "react-icons/md";

const ImageUploader = ({
  label,
  id,
  onChange,
  preview,
  onRemove,
  size,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="file"
      id={id}
      accept="image/png, image/jpeg"
      onChange={onChange}
      className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded"
    />
    {preview && (
      <div className="mt-4 border border-gray-300 rounded">
        <img
          src={preview}
          alt="Vista previa de la imagen"
          className="h-40 w-full object-cover rounded-t"
        />
        <div className="p-2 flex justify-between items-center">
          <span className="text-gray-600">
            Vista previa {size ? `(${size} KB)` : ""}
          </span>
          <button
            type="button"
            onClick={onRemove}
            className="text-red-600 hover:text-red-800 flex items-center"
          >
            <MdDelete size={25} />
            <span className="ml-1">Eliminar</span>
          </button>
        </div>
      </div>
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default ImageUploader;

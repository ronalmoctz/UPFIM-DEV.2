import React from 'react';

export default function ImageUpload() {
  const [image, setImage] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="col-span-2">
      <label
        htmlFor="imagen-taller"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Subir Imagen del Taller:
      </label>
      <input
        type="file"
        id="imagen-taller"
        className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div className="mt-3">
          <p className="text-sm text-gray-600">Vista previa de la imagen:</p>
          <img
            src={image}
            alt="Vista previa"
            className="mt-2 w-40 h-40 object-cover"
          />
        </div>
      )}
    </div>
  );
}

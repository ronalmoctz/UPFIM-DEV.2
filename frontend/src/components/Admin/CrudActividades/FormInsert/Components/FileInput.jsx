import React from "react";

const FileInput = ({ label, onChange, name, errors }) => (
  <div>
    <label htmlFor={name} className="block font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="file"
      name={name}
      onChange={onChange}
      className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded"
    />
    {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
  </div>
);

export default FileInput;

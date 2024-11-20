import React from "react";

const TextArea = ({ label, register, name, errors, placeholder, rows = 4 }) => (
  <div>
    <label htmlFor={name} className="block font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      {...register(name)}
      placeholder={placeholder}
      rows={rows}
      className="w-full p-2 border border-gray-300 rounded resize-none"
    ></textarea>
    {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
  </div>
);

export default TextArea;

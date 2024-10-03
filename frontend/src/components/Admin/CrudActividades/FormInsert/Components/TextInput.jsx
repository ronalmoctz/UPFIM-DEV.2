import React from "react";

const TextInput = ({
  label,
  register,
  name,
  errors,
  placeholder,
  type = "text",
}) => (
  <div>
    <label htmlFor={name} className="block font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
    />
    {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
  </div>
);

export default TextInput;

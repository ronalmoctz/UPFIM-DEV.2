
import React from "react";
const InputField = ({ label, id, register, error, type = "text", ...rest }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      {...register(id)}
      className={`w-full px-4 py-2 border rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      {...rest}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default InputField;

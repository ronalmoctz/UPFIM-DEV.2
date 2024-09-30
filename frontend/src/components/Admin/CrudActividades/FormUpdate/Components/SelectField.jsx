
import React from "react";
const SelectField = ({ label, id, register, error, options, ...rest }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor={id}>
      {label}
    </label>
    <select
      id={id}
      {...register(id)}
      className={`w-full px-4 py-2 border rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default SelectField;

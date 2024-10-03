import React from "react";

const SelectInput = ({ label, register, name, errors, options }) => (
  <div>
    <label htmlFor={name} className="block font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <select
      {...register(name)}
      className="w-full p-2 border border-gray-300 rounded"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
  </div>
);

export default SelectInput;

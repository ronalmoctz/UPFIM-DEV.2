import React from 'react';

export default function DaySelect() {
  return (
    <div>
      <label
        htmlFor="day-taller"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Dia del Taller
      </label>
      <select
        id="day-taller"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
        required
      >
        <option selected>Selecciona el dia</option>
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miercoles">Miercoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sabado">Sabado</option>
        <option value="Domingo">Domingo</option>
      </select>
    </div>
  );
}

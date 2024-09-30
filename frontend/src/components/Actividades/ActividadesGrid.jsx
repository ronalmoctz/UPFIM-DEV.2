import * as React from 'react';
import Select from './select';
import Button from './button';
import Toggle from './toggle';
import DaySelect from './DaySelect';
import ImageUpload from './ImageUpload';

const ActividadesGrid = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="grid grid-cols-2 gap-6 w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        {/* Input de Grupo */}
        <input
          type="text"
          id="grupo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
          placeholder="Grupo"
          required
        />

        {/* Select de Tipo de Taller */}
        <Select />

        {/* Input de Hora de entrada */}
        <div>
          <label
            htmlFor="start-time"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hora de entrada:
          </label>
          <input
            type="time"
            id="start-time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
            min="09:00"
            max="18:00"
            defaultValue="00:00"
            required
          />
        </div>

        {/* Input de Hora de salida */}
        <div>
          <label
            htmlFor="end-time"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hora de salida:
          </label>
          <input
            type="time"
            id="end-time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
            min="09:00"
            max="18:00"
            defaultValue="00:00"
            required
          />
        </div>

        {/* Input para Nombre del Taller */}
        <input
          type="text"
          id="nombre-taller"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
          placeholder="Nombre del Taller"
          required
        />

        {/* Select de Día del Taller */}
        <DaySelect />

        {/* Toggle para estatus activo/inactivo */}
        <Toggle />

        {/* Componente para subir imagen */}
        <ImageUpload />

        {/* Botón de Enviar */}
        <Button />
      </form>
    </div>
  );
};

export default ActividadesGrid;

import React from 'react';

const DocenteCards = ({ docente }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-md bg-gray-100 p-5 dark:bg-slate-800 dark:text-verde">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src={docente.img_url}
            alt={docente.nombre}
            className="h-14 w-14 rounded-full"
          />
          <div>
            <h1 className="text-xl font-semibold dark:text-gray-300">{`${docente.titulo} ${docente.nombre} ${docente.aPater} ${docente.aMater}`}</h1>
          </div>
        </div>
      </div>

      <div className="border-b pb-2">
        <p className="font-bold dark:text-gray-300">Imparte:</p>
        <div className="flex flex-wrap gap-2">
          {docente.talleres_impartidos ? (
            docente.talleres_impartidos.split(', ').map((taller, index) => (
              <span
                key={index}
                className="font-normal bg-gray-200 px-2 py-1 rounded hover:bg-verde hover:text-white transition-colors dark:bg-gray-700"
              >
                {taller}
              </span>
            ))
          ) : (
            <span>No tiene talleres asignados</span>
          )}
        </div>

        <p className="font-bold dark:text-gray-300">Tipo:</p>
        <div className="flex flex-wrap gap-2">
          {docente.tipos_taller ? (
            docente.tipos_taller.split(', ').map((tipo, index) => (
              <span
                key={index}
                className="font-normal bg-gray-200 px-2 py-1 rounded hover:bg-verde hover:text-white transition-colors dark:bg-gray-700"
              >
                {tipo}
              </span>
            ))
          ) : (
            <span>No tiene tipos de taller asignados</span>
          )}
        </div>

        <span className="font-bold flex items-center gap-1 dark:text-gray-300">
          Correo:{' '}
          <span className="font-normal">
            {docente.correo ? docente.correo : 'Correo no disponible'}
          </span>
        </span>
      </div>
    </div>
  );
};

export default DocenteCards;

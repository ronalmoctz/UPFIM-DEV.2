import React from "react";
const DocenteCards = ({ docente }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-md bg-white p-5 dark:bg-slate-800 dark:text-slae-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={docente.img_url} alt={docente.name} className="h-14 w-14 rounded-full" />
          <div>
            <h1 className="text-xl font-semibold">{`${docente.titulo} ${docente.nombre} ${docente.aPater} ${docente.aMater}`}</h1>
          </div>
        </div>
      </div>

      <div className="border-b pb-2">
        <p className="font-bold">Imparte: <span className="font-normal">{docente.nombre_taller}</span></p>
        <p className="font-bold">Tipo: <span className="font-normal">{docente.tipo}</span></p>
        <span className="font-bold flex items-center gap-1">Correo: <span className="font-normal">{docente.correo}</span></span>
      </div>
    </div>
  );
};

export default DocenteCards;

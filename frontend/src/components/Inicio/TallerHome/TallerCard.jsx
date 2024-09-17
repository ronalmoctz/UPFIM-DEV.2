import React from "react";

const TallerCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-md border-2 border-slate-300 bg-gray-100 p-5 hover:border-slate-500 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <div className="w-20 border-b-2 border-slate-500 p-2"></div>
        <h2>{data.frase}</h2>
      </div>

      <div className="mt-2 font-semibold uppercase tracking-widest">
        <img src={data.image} alt={data.name} />
      </div>
    </div>
  );
};

export default TallerCard;
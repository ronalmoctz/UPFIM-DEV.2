import React from "react";
const ReviewCards = ({ review }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-md bg-white p-5 dark:bg-slate-800 dark:text-slae-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={review.avatar} alt={review.name} className="h-14 w-14 rounded-full" />
          <div>
            <h1 className="text-xl font-semibold">{review.name}</h1>
          </div>
        </div>
      </div>

      <div className="border-b pb-2">
        <p className="font-bold">Imparte: <span className="font-normal">{review.quote}</span></p>
        <p className="font-bold">Tipo: <span className="font-normal">{review.rating}</span></p>
        <span className="font-bold flex items-center gap-1">Correo: <span className="font-normal">{review.quote}</span></span>
      </div>
    </div>
  );
};

export default ReviewCards;

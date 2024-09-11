import React from "react";
import { FaStar } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";
const ReviewCards = ({ review }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-md bg-white p-5 dark:bg-slate-800 dark:text-slae-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={review.avatar} alt={review.name}  className="h-14 w-14 rounded-full"/>

          <div>
            <h1 className="text-xl font-semibold">{review.name}</h1>
            <p className="text-sm text-gray-400">{review.role}</p>
          </div>
        </div>

        <VscQuote className="text-4xl text-gray-200"/>
      </div>

      <div className="border-b pb-2">
        <p>{review.quote}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          {review.rating}
          <FaStar className="text-yellow-500" />
        </span>

        <span>{review.totalReviews}+ reviews</span>
      </div>
    </div>
  );
};

export default ReviewCards;

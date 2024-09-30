import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-lg ${
            i + 1 === currentPage
              ? "bg-green-900 text-white"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

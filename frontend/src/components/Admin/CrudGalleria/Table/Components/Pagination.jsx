import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-lg ${
            i + 1 === currentPage
              ? "bg-verde text-white hover:bg-verdeHover"
              : "bg-gray-700 text-white hover:bg-verdeHover"
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

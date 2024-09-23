import React from 'react';
import { Button } from "@mui/material";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          variant={index + 1 === currentPage ? "contained" : "outlined"}
          onClick={() => onPageChange(index + 1)}
          sx={{ margin: "0 5px" }}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;

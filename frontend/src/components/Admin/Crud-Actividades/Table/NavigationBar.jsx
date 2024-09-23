import React from 'react';
import { IconButton, Tooltip, TextField } from "@mui/material";
import { CiCirclePlus } from "react-icons/ci";

const NavigationBar = ({ onCreate, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center mb-4">
      <Tooltip title="Agregar nueva actividad" arrow>
        <IconButton
          onClick={onCreate}
          sx={{ fontSize: "2rem", fontWeight: "bold" }}
          color="primary"
        >
          <CiCirclePlus size={50} />
        </IconButton>
      </Tooltip>
      <TextField
        label="Buscar por título"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow ml-4"
      />
    </div>
  );
};

export default NavigationBar;

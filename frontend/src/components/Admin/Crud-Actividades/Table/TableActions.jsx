import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { CiEdit, CiTrash } from "react-icons/ci";

const TableActions = ({ onEdit, onDelete }) => {
  return (
    <>
      <Tooltip title="Editar actividad" arrow>
        <IconButton onClick={onEdit} color="primary">
          <CiEdit size={25} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Eliminar actividad" arrow>
        <IconButton onClick={onDelete} color="secondary">
          <CiTrash size={25} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default TableActions;

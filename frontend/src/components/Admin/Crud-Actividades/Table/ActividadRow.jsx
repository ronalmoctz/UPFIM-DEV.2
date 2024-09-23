import React from "react";
import { TableRow, TableCell } from "@mui/material";
import TableActions from "./TableActions";

const ActividadRow = ({ actividad, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (timeString) => {
    const time = new Date(`1970-01-01T${timeString}`);
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <TableRow key={actividad.id} className="hover:bg-green-50">
      <TableCell>{actividad.titulo}</TableCell>
      <TableCell>{actividad.descripcion}</TableCell>
      <TableCell>{actividad.tipo}</TableCell>
      <TableCell>{formatDate(actividad.fecha)}</TableCell>
      <TableCell>{formatTime(actividad.hora)}</TableCell>
      <TableCell>{actividad.ubicacion}</TableCell>
      <TableCell>{actividad.estado}</TableCell>
      <TableCell>
        {actividad.img_url && (
          <img
            src={actividad.img_url}
            alt={actividad.titulo}
            className="h-20 w-20 object-cover rounded"
          />
        )}
      </TableCell>
      <TableCell>
        <TableActions
          onEdit={() => onEdit(actividad.id)}
          onDelete={() => onDelete(actividad.id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default ActividadRow;

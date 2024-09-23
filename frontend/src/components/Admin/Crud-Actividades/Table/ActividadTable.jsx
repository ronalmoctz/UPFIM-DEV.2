import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ActividadRow from "./ActividadRow";

const ActividadTable = ({ data, onEdit, onDelete }) => (
  <TableContainer className="mt-4 shadow-lg rounded-lg">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Título</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Descripción</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Tipo</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Fecha</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Hora</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Ubicación</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Estado</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Imagen</TableCell>
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#d1e7dd" }}>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((actividad) => (
          <ActividadRow
            key={actividad.id}
            actividad={actividad}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ActividadTable;

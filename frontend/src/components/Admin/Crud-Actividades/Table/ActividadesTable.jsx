import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ActividadTable from "./ActividadTable";
import NoDataComponent from "./NoDataComponent";
import NoData from "../../../../assets/nodata.webp";
import NavigationBar from "./NavigationBar";
import Pagination from "./Pagination";
import Swal from "sweetalert2";
import { showAlert } from "../../../Generales/Alerts/Alerts"; 

const ActividadesTable = () => {
  const [actividades, setActividades] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getActividades"
        );
        setActividades(response.data);
      } catch (error) {
        console.error("Error al obtener actividades:", error);
        showAlert("error", "Error", "No se pudo obtener las actividades.");
      }
    };
    fetchActividades();
  }, []);

  const handleCreate = () => {
    navigate("/insertActividad");
  };

  const handleDelete = async (id_actividad) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6ab356",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `http://localhost:3000/api/deleteActividad/${id_actividad}`
          );
          showAlert("success", "Eliminado", response.data.message);
          setActividades(
            actividades.filter((actividad) => actividad.id !== id_actividad)
          );
        } catch (error) {
          console.error("Error al eliminar la actividad:", error);
          showAlert("error", "Error", "No se pudo eliminar la actividad.");
        }
      }
    });
  };

  const handleEdit = (id_actividad) => {
    navigate(`/editActividad/${id_actividad}`);
  };

  const filteredActividades = actividades.filter((actividad) =>
    actividad.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredActividades.length / recordsPerPage);
  const currentData = filteredActividades.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Lista de Actividades
      </Typography>

      <NavigationBar
        onCreate={handleCreate}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {currentData.length === 0 ? (
        <NoDataComponent imageSrc={NoData} />
      ) : (
        <>
          <ActividadTable
            data={currentData}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ActividadesTable;

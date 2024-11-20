import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { showAlert } from "../../../../Generales/Alerts/Alerts";

const useActividades = () => {
  const [actividades, setActividades] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

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

  const handleDelete = async (id_actividad) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
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

  const filtered = actividades.filter((actividad) =>
    actividad.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtered.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return {
    actividades,
    searchQuery,
    currentPage,
    totalPages,
    currentProducts,
    setSearchQuery,
    setCurrentPage,
    handleDelete,
  };
};

export default useActividades;

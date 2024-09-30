import { motion } from "framer-motion";
import { TbEdit, TbTrash, TbPlus, TbSearch } from "react-icons/tb";
import React, { useState } from "react";
import img from "../../../../assets/nodata.png";
import { Link, useNavigate } from "react-router-dom";
import useActividades from "./Hooks/useActividades";
import { formatDate, formatTime } from "./Utils/utils";
import Modal from "./Components/Modal";
import Pagination from "./Components/Pagination";

const Table = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    searchQuery,
    currentPage,
    totalPages,
    currentProducts,
    setSearchQuery,
    setCurrentPage,
    handleDelete,
  } = useActividades();

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleEdit = (id_actividad) => {
    navigate(`/edit-products/${id_actividad}`);
  };

  return (
    <motion.div
      className="bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 sm:mb-0">
          Lista de Actividades
        </h2>
        <Link
          to={"/form-products"}
          className="text-bold flex items-center text-gray-950 hover:text-gray-400 mb-4 sm:mb-0"
        >
          <TbPlus size={30} className="mr-2" />
          Agregar Evento
        </Link>
        <div className="relative w-full sm:w-auto">
          <TbSearch
            className="absolute left-3 top-2.5 text-gray-950"
            size={20}
          />
          <input
            type="text"
            placeholder="Buscar actividades por título"
            className="pl-10 pr-4 py-2 rounded-md text-gray-950 focus:outline-none focus:ring focus:border-green-900 w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        {currentProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <img src={img} alt="No data" className="w-80 h-80" />
            <p className="text-gray-950 mt-4">No hay datos que mostrar.</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-900">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Hora
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Ubicación
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-10 py-5 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Imagen
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {currentProducts.map((actividad) => (
                <motion.tr
                  key={actividad.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-gray-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {actividad.titulo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {actividad.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                    {actividad.tipo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                    {formatDate(actividad.fecha)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                    {formatTime(actividad.hora)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {actividad.ubicacion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                    {actividad.estado}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={actividad.img_url}
                      alt={actividad.titulo}
                      className="w-20 h-20 object-cover"
                      onClick={() => openModal(actividad.img_url)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(actividad.id)}>
                      <TbEdit
                        size={30}
                        className="text-blue-500 hover:text-blue-700"
                      />
                    </button>
                    <button onClick={() => handleDelete(actividad.id)}>
                      <TbTrash
                        size={30}
                        className="text-red-500 hover:text-red-700"
                      />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </motion.div>
  );
};
export default Table;

import { motion } from "framer-motion";
import { TbEdit, TbTrash, TbPlus, TbSearch } from "react-icons/tb";
import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../../../../assets/nodata.webp";
import Modal from "./Components/Modal";
import { Link, useNavigate } from "react-router-dom";
const Table = () => {
  const navigate = useNavigate();
  const [featuredImages, setFeaturedImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    const fetchFeaturedImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getAllFeaturedImages"
        );
        setFeaturedImages(response.data);
      } catch (err) {
        console.error("Error fetching featured images:", err);
      }
    };
    fetchFeaturedImages();
  }, []);
  const filteredImages = featuredImages.filter((image) =>
    image.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className="bg-white shadow-lg p-6 border rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-verde mb-4 sm:mb-0">
          Lista de Imagenes
        </h2>
        <Link to={"/insertGaleria"}
          className="flex items-center text-verde hover:text-verdeHover hover:font-semibold mb-4 sm:mb-0">
          <TbPlus size={30} className="mr-2" />
          Agregar fotos
        </Link>
        <div className="relative w-full sm:w-auto">
          <TbSearch className="absolute left-3 top-2.5 text-verde" size={20} />
          <input
            type="text"
            placeholder="Buscar por descripción"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md text-gray-950 w-full sm:w-64 border-2 border-verde outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        {filteredImages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <img src={img} alt="No hay datos" className="w-80 h-80" />
            <p className="text-verde mt-4 text-bold ">
              No hay datos que mostrar.
            </p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-900">
            <thead>
              <tr>
                <th className="px-10 py-5 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  #
                </th>
                <th className="px-10 py-5 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Imagen
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredImages.map((image, index) => (
                <motion.tr
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-gray-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={image.url_img}
                      alt={image.description || "Imagen"}
                      className="w-20 h-20 object-cover"
                      onClick={() => openModal(image.url_img)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {image.description || "Sin descripción"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                    {new Date(image.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 ">
                    <button>
                      <TbEdit
                        size={30}
                        className="text-blue-500 hover:text-verde"
                      />
                    </button>
                    <button>
                      <TbTrash
                        size={30}
                        className="text-red-500 hover:text-verde"
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
    </motion.div>
  );
};

export default Table;

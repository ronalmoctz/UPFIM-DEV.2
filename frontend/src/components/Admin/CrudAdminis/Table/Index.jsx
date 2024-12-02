import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbEdit, TbTrash, TbPlus, TbSearch } from "react-icons/tb";
import axios from "axios";
import img from "../../../../assets/nodata.webp";
import { Link, useNavigate } from "react-router-dom";
const Table = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getAdmin");
        setAdminData(response.data);
      } catch (error) {
        console.error("Error al obtener datos de admin:", error);
      }
    };
    fetchAdminData();
  }, []);
  const handleDelete = async (email) => {
    if (
      window.confirm("¿Estás seguro de que deseas eliminar este administrador?")
    ) {
      try {
        await axios.delete("http://localhost:3000/api/deleteAdmin", {
          data: { email },
        });
        setAdminData(
          adminData.filter((admin) => admin.Correo_Electronico !== email)
        );
        alert("Administrador eliminado exitosamente.");
      } catch (error) {
        console.error("Error al eliminar administrador:", error);
        alert("Hubo un error al eliminar el administrador.");
      }
    }
  };
  const filteredAdmins = adminData.filter((admin) =>
    admin.Nombre?.toLowerCase().includes(searchQuery.toLowerCase())
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
          Lista de Administradores
        </h2>
        <Link
          to={"/insertAdmin"}
          className="flex items-center text-verde hover:text-verdeHover hover:font-semibold mb-4 sm:mb-0"
        >
          <TbPlus size={30} className="mr-2" />
          Agregar Administrador
        </Link>
        <div className="relative w-full sm:w-auto">
          <TbSearch className="absolute left-3 top-2.5 text-verde" size={20} />
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md text-gray-950 w-full sm:w-64 border-2 border-verde outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        {filteredAdmins.length === 0 ? (
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
                  Usuario
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Paterno
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Materno
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Correo
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Estatus
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-verde uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredAdmins.map((admin) => (
                <motion.tr
                  key={admin.ID_Admin}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-gray-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {admin.Usuario}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {admin.Nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {admin.Apellido_Paterno}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {admin.Apellido_Materno}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {admin.Correo_Electronico}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950 max-w-xs overflow-hidden overflow-ellipsis">
                    {admin.Estatus}
                  </td>
                  <td className="px-6 py-4">

                    <button
                      onClick={() =>
                        navigate("/editAdmin", {
                          state: { admin }, 
                        })
                      }
                    >
                      <TbEdit
                        size={30}
                        className="text-blue-500 hover:text-verde"
                      />
                    </button>

                    <button
                      onClick={() => handleDelete(admin.Correo_Electronico)}
                    >
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
    </motion.div>
  );
};
export default Table;

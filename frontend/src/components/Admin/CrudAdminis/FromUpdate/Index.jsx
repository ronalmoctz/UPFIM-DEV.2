import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const EditAdminForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { admin } = location.state; 

  const [formData, setFormData] = useState({
    id_admin: admin.ID_Admin, 
    username: admin.Usuario,
    nombre: admin.Nombre,
    apellidoPaterno: admin.Apellido_Paterno,
    apellidoMaterno: admin.Apellido_Materno,
    email: admin.Correo_Electronico,
    estatus: admin.Estatus === 1 ? 1 : 0, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "estatus" ? parseInt(value) : value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/api/updateAdmin", formData);
      alert("Administrador actualizado exitosamente.");
      navigate("/admins"); 
    } catch (error) {
      console.error("Error al actualizar administrador:", error);
      alert("Hubo un error al actualizar el administrador.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="p-6 bg-white shadow-md rounded w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-verde">
          Editar Administrador
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellido Paterno</label>
          <input
            type="text"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellido Materno</label>
          <input
            type="text"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Estatus</label>
          <select
            name="estatus"
            value={formData.estatus}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-verde text-white rounded hover:bg-verdeHover w-full"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditAdminForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { showAlert } from "../../../Generales/Alerts/Alerts"; 
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

const EditActividad = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    tipo: "deportiva",
    fecha: "",
    hora: "",
    ubicacion: "",
    estado: "activa",
    imagen: null,
  });

  const [imagenPreview, setImagenPreview] = useState(null);
  const { id_actividad } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActividad = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getActividad/${id_actividad}`
        );
        const actividad = response.data;
        const fechaFormateada = dayjs(actividad.fecha).format("YYYY-MM-DD");

        setFormData({
          titulo: actividad.titulo,
          descripcion: actividad.descripcion,
          tipo: actividad.tipo,
          fecha: fechaFormateada,
          hora: actividad.hora,
          ubicacion: actividad.ubicacion,
          estado: actividad.estado,
          imagen: null,
        });
        setImagenPreview(actividad.imagen_url);
      } catch (error) {
        console.error("Error al obtener la actividad", error);
      }
    };
    fetchActividad();
  }, [id_actividad]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setImagenPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.put(
        `http://localhost:3000/api/updateActividad/${id_actividad}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      showAlert('success', 'Éxito', 'Actividad exitosamente exitosamente');
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar la actividad", error);
      showAlert('error', 'Error', 'Error al actualizar la actividad');
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        width: "100%",
        mx: "auto",
        mt: 4,
        p: 2,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Editar Actividad
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Título"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        required
        margin="normal"
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Descripción"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        required
        multiline
        rows={4}
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo</InputLabel>
        <Select
          label="Tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
        >
          <MenuItem value="deportiva">Deportiva</MenuItem>
          <MenuItem value="cultural">Cultural</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        type="date"
        label="Fecha"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <TextField
        fullWidth
        type="time"
        label="Hora"
        name="hora"
        value={formData.hora}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Ubicación"
        name="ubicacion"
        value={formData.ubicacion}
        onChange={handleChange}
        required
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Estado</InputLabel>
        <Select
          label="Estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
        >
          <MenuItem value="activa">Activa</MenuItem>
          <MenuItem value="cancelada">Cancelada</MenuItem>
          <MenuItem value="finalizada">Finalizada</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        component="label"
        fullWidth
        sx={{ mt: 2, mb: 2 }}
      >
        Subir Imagen
        <input type="file" name="imagen" hidden onChange={handleChange} />
      </Button>

      {imagenPreview && (
        <Card sx={{ mt: 2 }}>
          <CardMedia
            component="img"
            height="200"
            image={imagenPreview}
            alt="Vista previa de la imagen"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Vista previa de la imagen actual
            </Typography>
          </CardContent>
        </Card>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="contained" color="primary" type="submit">
          Guardar Cambios
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Regresar
        </Button>
      </Box>
    </Box>
  );
};

export default EditActividad;

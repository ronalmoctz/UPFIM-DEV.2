const db = require('../database/db');
const cloudinary = require('cloudinary').v2;

const getActividades = async (req, res) => {
  try {
    const [results] = await db.query('CALL getActividades()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const insertActividad = async (req, res) => {
  const { titulo, descripcion, tipo, fecha, hora, ubicacion, estado } = req.body;
  const img_url = req.file ? req.file.path : null;

  if (!img_url) {
    return res.status(400).json({ error: 'Se requiere una imagen válida' });
  }
  const sql = 'CALL insertActividad(?, ?, ?, ?, ?, ?, ?, ?)';
  try {
    const [result] = await db.query(sql, [
      titulo,
      descripcion,
      tipo,
      fecha,
      hora,
      ubicacion,
      img_url,
      estado,
    ]);
    return res.status(201).json({
      message: 'Actividad agregada exitosamente',
      result,
    });
  } catch (err) {
    console.error('Error al insertar actividad:', err);
    return res.status(500).json({ error: 'Error al insertar actividad' });
  }
};

const deleteActividad = async (req, res) => {
  const id_actividad = req.params.id_actividad;
  const getSql = 'CALL getActividadById(?)';
  try {
    const [results] = await db.query(getSql, [id_actividad]);

    if (results[0].length === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }
    const actividad = results[0][0];
    const img_url = actividad.img_url;
    if (img_url) {
      const public_id = img_url.split('/').slice(-2).join('/').split('.')[0];
      const cloudinaryResult = await cloudinary.uploader.destroy(public_id);
      console.log('Imagen eliminada de Cloudinary:', cloudinaryResult);
      if (!cloudinaryResult.result || cloudinaryResult.result !== 'ok') {
        return res.status(500).json({ error: 'Error al eliminar la imagen' });
      }
    }
    const deleteSql = 'CALL deleteActividad(?)';
    const [deleteResult] = await db.query(deleteSql, [id_actividad]);
    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }
    return res.status(200).json({
      message: img_url
        ? 'Actividad y su imagen eliminadas exitosamente'
        : 'Actividad eliminada exitosamente',
    });
  } catch (err) {
    console.error('Error al eliminar la actividad:', err);
    return res.status(500).json({ error: 'Error al eliminar la actividad' });
  }
};

const getActividadById = async (req, res) => {
  const id_actividad = req.params.id_actividad;
  const sql = 'CALL getActividadById(?)';
  try {
    const [results] = await db.query(sql, [id_actividad]);
    if (results[0].length === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }
    return res.status(200).json(results[0][0]);
  } catch (err) {
    console.error('Error al obtener la actividad:', err);
    return res.status(500).json({ error: 'Error al obtener la actividad' });
  }
};

const updateActividad = async (req, res) => {
  const id_actividad = req.params.id_actividad;
  const { titulo, descripcion, tipo, fecha, hora, ubicacion, estado } =
    req.body;
  let img_url = req.file ? req.file.path : null;
  const sqlSelect = 'CALL getActividadById(?)';
  try {
    const [results] = await db.query(sqlSelect, [id_actividad]);
    if (results[0].length === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }
    const actividad = results[0][0];
    const oldImageUrl = actividad.img_url;
    if (img_url && oldImageUrl) {
      const publicId = oldImageUrl.split('/').pop().split('.')[0];
      try {
        const cloudinaryResult = await cloudinary.uploader.destroy(
          `actividades/${publicId}`
        );
        console.log(
          'Imagen antigua eliminada de Cloudinary:',
          cloudinaryResult
        );
      } catch (error) {
        console.error('Error al eliminar la imagen de Cloudinary:', error);
      }
    } else {
      img_url = oldImageUrl;
    }
    const sqlUpdate = 'CALL updateActividad(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const [updateResult] = await db.query(sqlUpdate, [
      id_actividad,
      titulo,
      descripcion,
      tipo,
      fecha,
      hora,
      ubicacion,
      img_url,
      estado,
    ]);
    if (updateResult.affectedRows === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }
    return res
      .status(200)
      .json({ message: 'Actividad actualizada exitosamente' });
  } catch (err) {
    console.error('Error al actualizar la actividad:', err);
    return res.status(500).json({ error: 'Error al actualizar la actividad' });
  }
};

module.exports = {
  getActividades,
  insertActividad,
  deleteActividad,
  getActividadById,
  updateActividad,
};

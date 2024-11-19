
const AppError = require('../../errors/AppError');
const { logger } = require('../../utils/logger');
const cloudinary = require('cloudinary').v2;
const db = require('../../database/db');



//======== ENPOINT PARA MOSTRAR TALLERES EN LA PAGINA PRINCIAPL =================//
const getTalleres = async (req, res, next) => {
  try {
    const [results] = await db.query('CALL getTalleres()');
    res.json(results[0]);
  } catch (err) {
    logger.error('Error al obtener talleres', { error: err.message });
    next(new AppError('Error al obtener datos de talleres', 500));
  }
};

//======== ENPOINT PARA MOSTRAR TALLERES EN LA TABLA CRUD =================//
const getTallerCrud = async (req, res, next) => {
  try {
    const [results] = await db.query('CALL getTallerQrud()');
    res.json(results[0]);
  } catch (err) {
    logger.error('Error al obtener datos para crud de talleres', {
      error: err.message,
    });
    next(new AppError('Error al obtener datos de crud de talleres', 500));
  }
};

//======== ENPOINT PARA INSERTAR TALLERES EN LA TABLA CRUD =================//
const insertarTaller = async (req, res, next) => {
  const {
    nombre_taller,
    tipo_taller,
    estatus_taller,
    nombre_docente_completo,
    grupos,
  } = req.body;
  if (!req.file) {
    return next(new AppError('La imagen es requerida.', 400));
  }
  const img_url_taller = req.file.path;
  const tiposValidos = ['deportiva', 'cultural'];
  if (!tiposValidos.includes(tipo_taller)) {
    return next(
      new AppError(
        "Tipo de taller inválido. Debe ser 'deportiva' o 'cultural'.",
        400,
      ),
    );
  }
  if (!Number.isInteger(Number(estatus_taller))) {
    return next(
      new AppError('Estatus del taller debe ser un número entero.', 400),
    );
  }
  let grupos_json;
  try {
    grupos_json = JSON.parse(grupos);
  } catch (error) {
    logger.warn('Formato JSON inválido en grupos', { grupos });
    return next(new AppError("Formato JSON inválido en 'grupos'.", 400));
  }
  if (!Array.isArray(grupos_json)) {
    return next(new AppError("El campo 'grupos' debe ser un array.", 400));
  }
  try {
    const [result] = await db.query(
      'CALL insertar_taller_con_grupos(?, ?, ?, ?, ?, ?)',
      [
        nombre_taller,
        tipo_taller,
        img_url_taller,
        estatus_taller,
        nombre_docente_completo,
        JSON.stringify(grupos_json),
      ],
    );
    logger.info('Taller insertado correctamente', {
      nombre_taller,
      tipo_taller,
    });
    res.status(201).json({
      message: 'Taller insertado correctamente',
      data: result,
    });
  } catch (error) {
    logger.error('Error al insertar el taller', { error: error.message });
    next(new AppError('Ocurrió un error al insertar el taller', 500));
  }
};

//======== ENPOINT PARA ELIMINAR TALLERES EN LA TABLA CRUD  =================//
const deleteTaller = async (req, res) => {
  const id_taller = req.params.id_taller;
  const getSql = 'CALL getTallerById(?)';
  try {
    const [results] = await db.query(getSql, [id_taller]);

    if (results[0].length === 0) {
      return res.status(404).json({ message: 'Taller no encontrado' });
    }
    const taller = results[0][0];
    const img_url = taller.img_url;
    if (img_url) {
      const public_id = img_url.split('/').slice(-2).join('/').split('.')[0];
      const cloudinaryResult = await cloudinary.uploader.destroy(public_id);
      console.log('Imagen eliminada de Cloudinary:', cloudinaryResult);
      if (!cloudinaryResult.result || cloudinaryResult.result !== 'ok') {
        return res.status(500).json({ error: 'Error al eliminar la imagen' });
      }
    }
    const deleteSql = 'CALL deletedTaller(?)';
    await db.query(deleteSql, [id_taller]);
    return res.status(200).json({
      message: img_url
        ? 'Taller y su imagen eliminados exitosamente'
        : 'Taller eliminado exitosamente',
    });
  } catch (err) {
    console.error('Error al eliminar el taller:', err);
    return res.status(500).json({ error: 'Error al eliminar el taller' });
  }
};

//======== ENPOINT PARA MOSTRAR ACTIVIDADES EN LA TABLA=================//
const getActividades = async (req, res) => {
  try {
    const [results] = await db.query('CALL getActividades()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

//======== ENPOINT PARA INSERTAR ACTIVIDADES EN LA TABLA CRUD=================//
const insertActividad = async (req, res) => {
  const { titulo, descripcion, tipo, fecha, hora, ubicacion, estado } =
    req.body;
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

//======== ENPOINT PARA ELIMINAR ACTIVIDADES EN LA TABLA CRUD=================//
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

//======== ENPOINT PARA LLAMAR EL TALLER ESPECIFICO PARA EL DE ACTUALIZAR=================//
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

//======== ENPOINT PARA ACTUALIZAR ACTIVIDADES EN LA TABLA CRUD=================//
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
          `actividades/${publicId}`,
        );
        console.log(
          'Imagen antigua eliminada de Cloudinary:',
          cloudinaryResult,
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
  getTalleres,
  getTallerCrud,
  insertarTaller,
  deleteTaller,
  getActividades,
  insertActividad,
  deleteActividad,
  getActividadById,
  updateActividad,
};

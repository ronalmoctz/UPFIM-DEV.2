const db = require('../database/db');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');
const cloudinary = require('cloudinary').v2;

const getTalleres = async (req, res, next) => {
  try {
    const [results] = await db.query('CALL getTalleres()');
    res.json(results[0]);
  } catch (err) {
    logger.error('Error al obtener talleres', { error: err.message });
    next(new AppError('Error al obtener datos de talleres', 500));
  }
};

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
    const [deleteResult] = await db.query(deleteSql, [id_taller]);
    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({ message: 'Taller no encontrado' });
    }
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

module.exports = { getTalleres, getTallerCrud, insertarTaller, deleteTaller };

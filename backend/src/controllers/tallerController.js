const db = require('../database/db');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

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

module.exports = { getTalleres, getTallerCrud, insertarTaller };

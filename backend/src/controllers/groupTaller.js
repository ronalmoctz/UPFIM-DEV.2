const AppError = require('../errors/AppError');
const tallerService = require('../service/tallerService');
const { logger } = require('../utils/logger');

const insertTallerGroup = async (req, res, next) => {
  const {
    nombre,
    tipo,
    img_url,
    estatus,
    docente_fk,
    dia,
    hrEntrada,
    hrSalida,
    grupo,
  } = req.body;

  // Validación de datos de entrada
  if (
    !nombre ||
    !tipo ||
    !img_url ||
    !estatus ||
    !docente_fk ||
    !dia ||
    !hrEntrada ||
    !hrSalida ||
    !grupo
  ) {
    logger.warn('Datos incompletos en la solicitud de inserción de taller');
    return next(
      new AppError('Todos los campos del taller son obligatorios', 400),
    );
  }

  try {
    // Verificación de duplicados
    const ifExistTaller = await tallerService.checkDuplicateTaller(
      nombre,
      grupo,
      dia,
      hrEntrada,
      hrSalida,
    );

    if (ifExistTaller) {
      logger.warn('Intento de inserción de taller duplicado', {
        nombre,
        grupo,
        dia,
        hrEntrada,
        hrSalida,
      });
      return next(
        new AppError('Ya existe un taller con los mismos valores', 400),
      );
    }

    // Inserción en la base de datos
    const result = await tallerService.insertTallerGroupDocente(
      nombre,
      tipo,
      img_url,
      estatus,
      docente_fk,
      dia,
      hrEntrada,
      hrSalida,
      grupo,
    );

    logger.info('Taller insertado exitosamente', { nombre, grupo, dia });
    res.status(201).json({
      message: 'Transacción completada con éxito',
      result,
    });
  } catch (error) {
    logger.error('Error en la inserción de taller', { error: error.message });
    next(new AppError('Error en la inserción de taller', 500));
  }
};

module.exports = { insertTallerGroup };

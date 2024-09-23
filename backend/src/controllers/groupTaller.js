const AppError = require('../errors/AppError');
const tallerService = require('../service/tallerService');

/**
 * Controlador para manejar la inserción de un nuevo taller.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 * @param {function} next - Middleware para pasar al siguiente manejador.
 */
const insertTallerGroup = async (req, res, next) => {
  if (!req.body) {
    return next(new AppError('No se recibieron datos', 400));
  }

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

  try {
    const result = await tallerService.insertTallerGroupDocente(
      nombre,
      tipo,
      img_url,
      estatus,
      docente_fk,
      dia,
      hrEntrada,
      hrSalida,
      grupo
    );

    res.status(201).json({
      message: 'Transacción completada con éxito',
      result,
    });
  } catch (error) {
    console.error('Error en la inserción:', error);
    next(new AppError(error.message || 'Error inesperado', 500));
  }
};

module.exports = { insertTallerGroup };

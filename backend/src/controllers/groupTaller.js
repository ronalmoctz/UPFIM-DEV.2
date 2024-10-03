// const AppError = require('../errors/AppError');
// const tallerService = require('../service/tallerService');

// /**
//  * Controlador para manejar la inserción de un nuevo taller.
//  * @param {object} req - Request object.
//  * @param {object} res - Response object.
//  * @param {function} next - Middleware para pasar al siguiente manejador.
//  */
// const insertTallerGroup = async (req, res, next) => {
//   if (!req.body) {
//     return next(new AppError('No se recibieron datos', 400));
//   }

//   const {
//     nombre,
//     tipo,
//     img_url,
//     estatus,
//     docente_fk,
//     dia,
//     hrEntrada,
//     hrSalida,
//     grupo,
//   } = req.body;

//   try {
//     // Verificar si existe
//     const ifExistTaller = await tallerService.checkDuplicateTaller(
//       nombre,
//       grupo,
//       dia,
//       hrEntrada,
//       hrSalida
//     );

//     if (ifExistTaller) {
//       return next(
//         new AppError('Ya existe este taller con los mismo valores', 400)
//       );
//     }

//     const result = await tallerService.insertTallerGroupDocente(
//       nombre,
//       tipo,
//       img_url,
//       estatus,
//       docente_fk,
//       dia,
//       hrEntrada,
//       hrSalida,
//       grupo
//     );

//     res.status(201).json({
//       message: 'Transacción completada con éxito',
//       result,
//     });
//   } catch (error) {
//     console.error('Error en la inserción:', error);
//     next(new AppError(error.message || 'Error inesperado', 500));
//   }
// };

// module.exports = { insertTallerGroup };

const db = require('../database/db');
const insertTallerGroup = async (req, res) => {
  const {
    taller_nombre,
    taller_tipo,
    taller_img_url,
    taller_estatus,
    docente_fk,
    horario_dia,
    horario_hrEntrada,
    horario_hrSalida,
    grupo,
  } = req.body;


  if (!taller_img_url) {
    return res.status(400).json({ error: 'Se requiere una URL de imagen válida' });
  }

  const sql = 'CALL insertTallerGrupoDocente(?, ?, ?, ?, ?, ?, ?, ?, ?)';
  try {
    const [result] = await db.query(sql, [
      taller_nombre,
      taller_tipo,
      taller_img_url,
      taller_estatus,
      docente_fk,
      horario_dia,
      horario_hrEntrada,
      horario_hrSalida,
      grupo,
    ]);
    return res.status(201).json({
      message: 'Taller, grupo y docente agregados exitosamente',
      result,
    });
  } catch (err) {
    console.error('Error al insertar taller, grupo y docente:', err);
    return res.status(500).json({ error: 'Error al insertar taller, grupo y docente' });
  }
};

module.exports = { insertTallerGroup };

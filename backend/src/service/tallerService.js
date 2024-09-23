const db = require('../database/db');
const AppError = require('../errors/AppError');

/**
 * Inserta un nuevo taller, su horario, y la relación con un docente.
 * @param {string} nombre - Nombre del taller.
 * @param {string} tipo - Tipo de taller (deportiva/cultural).
 * @param {string} img_url - URL de la imagen del taller.
 * @param {number} estatus - Estado del taller (1 = activo, 0 = inactivo).
 * @param {number} docente_fk - ID del docente.
 * @param {string} dia - Día del horario.
 * @param {string} hrEntrada - Hora de entrada.
 * @param {string} hrSalida - Hora de salida.
 * @param {string} grupo - Nombre del grupo.
 * @returns {Promise<object>} Resultado de la inserción.
 * @throws {AppError} En caso de error en la inserción.
 */
const insertTallerGroupDocente = async (
  nombre,
  tipo,
  img_url,
  estatus,
  docente_fk,
  dia,
  hrEntrada,
  hrSalida,
  grupo
) => {
  try {
    const result = await db.query(
      'CALL insertTallerGrupoDocente(?,?,?,?,?,?,?,?,?)',
      [
        nombre,
        tipo,
        img_url,
        estatus,
        docente_fk,
        dia,
        hrEntrada,
        hrSalida,
        grupo,
      ]
    );
    return result;
  } catch (error) {
    console.error('Aca paso algo', error);
    throw new AppError(
      error.message || 'Error inesperado al insertar el taller',
      500
    );
  }
};

module.exports = {
  insertTallerGroupDocente,
};

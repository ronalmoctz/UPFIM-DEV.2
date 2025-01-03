const pool = require('../database/db');
const bcrypt = require('bcrypt');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const insertDocente = async (docentes) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction(); // Start transaction

    const result = [];

    for (const docente of docentes) {
      if (!docente.pass) {
        throw new AppError(
          `Contraseña faltante para el docente: ${docente.userName}`,
          400,
        );
      }
      const hashedPassword = await bcrypt.hash(docente.pass, 10);

      const [queryResult] = await connection.query(
        'CALL admin_teacherinsert(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          docente.idUser,
          docente.userName,
          hashedPassword,
          docente.teacherName,
          docente.surnameP,
          docente.surnameM,
          docente.email,
          docente.profile_img,
          docente.grado,
        ],
      );
      result.push(queryResult);
      logger.info(`Docente ${docente.userName} insertado correctamente`);
    }

    await connection.commit(); // Confirm transaction
    return result;
  } catch (error) {
    await connection.rollback(); // Reverse if have error
    console.error(error);
    if (error.code === 'ER_DUP_ENTRY') {
      throw new AppError('Ya existe un docente con ese nombre de usuario', 400);
    } else if (error.code === 'ER_BAD_FIELD_ERROR') {
      throw new AppError('Ya existe un docente con ese nombre de usuario', 400);
    } else {
      throw new AppError('Error al insertar docente', 500);
    }
  } finally {
    connection.release(); // Open the connection
  }
};

module.exports = { insertDocente };

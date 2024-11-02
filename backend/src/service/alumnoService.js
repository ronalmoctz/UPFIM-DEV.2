const pool = require('../database/db');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const insertStudentsMassive = async (alumnos) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction(); //Start transaction

    const result = [];
    for (const alumno of alumnos) {
      const [queryResult] = await connection.query(
        'CALL admin_studentinsert(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          alumno.idUser,
          alumno.userName,
          alumno.pass,
          alumno.studentName,
          alumno.surnameP,
          alumno.surnameM,
          alumno.studentGroup,
          alumno.email,
          alumno.sexo,
          alumno.lengua,
          alumno.programa,
          alumno.cuatrimestre,
        ],
      );
      result.push(queryResult);
    }

    await connection.commit(); //Confirm transaction
    return result;
  } catch (error) {
    await connection.rollback(); //Reverse transaction on error

    if (error.code === 'ER_DUP_ENTRY') {
      logger.warn(`Duplicate entry  error: ${error.message}`);
      throw AppError.validationError(
        'Duplicate entry detected in student data',
      );
    }
    logger.error(`Transaction error: ${error.message}`);
    throw error.isOperational ? error : AppError.dbError(); // Wrap non-operational errors as AppError
  } finally {
    connection.release(); //open the connection
  }
};

module.exports = { insertStudentsMassive };

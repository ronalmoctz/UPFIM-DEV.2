const pool = require('../database/db');
const AppError = require('../errors/AppError');
const LogService = require('../utils/LogsService');

const insertStudens = async (alumnos) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

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

    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    if (error.code === 'ER_DUP_ENTRY') {
      LogService.logWarning('Duplicate entry detected for student data', {
        error: error.message,
      });
      throw AppError.validationError(
        'Duplicate entry detected for student data',
      );
    }
    LogService.logError(`Error while inserting students: ${error.message}`);
    throw AppError.dbError('Database errror transaction failed');
  } finally {
    connection.release();
  }
};

module.exports = { insertStudens };

const db = require('../../database/db');
const { logger } = require('../../utils/logger');
const { AppError } = require('../../errors/AppError');

const gradeStudent = async (studenId, period, cal1, cal2, cal3) => {
  try {
    const [result] = await db.execute('CALL teacher_cal_students(?,?,?,?,?)', [
      studenId,
      period,
      cal1,
      cal2,
      cal3,
    ]);
    if (!result.affectedRows) {
      throw new AppError('No se pudo actualizar la calificación', 400);
    }

    logger.info(
      `Se actualizó la calificación del alumno ${studenId} en el periodo ${period}`,
    );
    return { message: 'Se actualizó la calificación del alumno' };
  } catch (error) {
    logger.error(error.message);
    if (error.sqlState === '45000') {
      throw AppError.dbError(
        'No se pudo actualizar la calificación del alumno',
      );
    }
    throw AppError.dbError('Error al actualizar la calificación del alumno');
  }
};

module.exports = { gradeStudent };

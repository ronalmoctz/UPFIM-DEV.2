const { gradeStudent } = require('../../service/docente/teacherService');
const { AppError } = require('../../errors/AppError');
const { logger } = require('../../utils/logger');

exports.docenteDashboardController = (req, res) => {
  res.json({ message: 'Bienvenido al Dashboard de Docente', user: req.user });
};

exports.gradeStudentController = async (req, res, next) => {
  try {
    const { studentId, period, cal1, cal2, cal3 } = req.body;

    //Validartion to the file
    if (
      !studentId ||
      !period ||
      !cal1 == null ||
      !cal2 == null ||
      !cal3 == null
    ) {
      throw AppError.validationError(
        'Faltan datos para actualizar la calificación',
        400,
      );
    }

    const result = await gradeStudent(studentId, period, cal1, cal2, cal3);
    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    logger.error(
      `Error al calificar alumno ${studentId} en el periodo ${period}, error: ${error.message}`,
    );
    next(error);
  }
};

const fs = require('fs').promises;
const { insertStudentsMassive } = require('../service/alumnoService');
const { parseExcel } = require('../helpers/excelHelper');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const safeDeleteFile = async (path) => {
  try {
    await fs.unlink(path);
    console.log('Archivo eliminado correctamente');
  } catch (error) {
    logger.error({ message: 'Error al eliminar archivo', error });
  }
};

const registerStudentsMassive = async (req, res, next) => {
  try {
    console.log('Iniciando el proceso de registro masivo de alumnos');
    if (!req.file) {
      return next(new AppError('Can not update the file, file is emply', 400));
    }

    console.log('Archivo recibido:', req.file);

    //Proccess Excel file and get data
    const alumnos = await parseExcel(req.file.path);
    if (!alumnos || alumnos.length === 0) {
      return next(new AppError('El archivo no contiene datos validos', 400));
    }
    console.log('Alumnos extraídos del archivo:', alumnos);

    //Insert students massive form
    const result = await insertStudentsMassive(alumnos);
    console.log('Resultado de la inserción masiva:', result);

    //Delete the file after processing
    await safeDeleteFile(req.file.path);
    console.log('Archivo eliminado correctamente');

    res.status(200).json({ message: 'Student now register success', result });
  } catch (error) {
    console.error('Error durante el registro masivo de alumnos:', error);
    // Ensure the file is deleted even if there's an error
    if (req.file) {
      await safeDeleteFile(req.file.path); // Delete the file in case of error
      next(
        new AppError(
          error.message || 'Error inesperado en el registro masivo',
          500,
        ),
      ); // Send error to errorHandler middleware
    }
  }
};

module.exports = { registerStudentsMassive };

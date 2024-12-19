const fs = require('fs').promises;
const { insertStudens } = require('../service/alumnoService');
const { parseExcel } = require('../helpers/excelHelper');
const AppError = require('../errors/AppError');
const LogService = require('../utils/LogsService');

const safeDeleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    LogService.logInfo(`File ${filePath} deleted successfully`);
  } catch (error) {
    LogService.logError(
      `Error while deleting file ${filePath}: ${error.message}`,
    );
  }
};

const registerStudentsController = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new AppError('No file uploaded', 400));
    }

    const alumnos = await parseExcel(req.file.path);
    if (!alumnos || alumnos.length === 0) {
      return next(
        new AppError.validationError('No students found in file', 400),
      );
    }

    const result = await insertStudens(alumnos);
    await safeDeleteFile(req.file.path);

    res
      .status(200)
      .json({ message: 'Students registered successfully', data: result });
  } catch (error) {
    LogService.logError(
      `Error in registerStudentsController: ${error.message}`,
    );
    if (req.file) {
      await safeDeleteFile(req.file.path);
    }
    next(new AppError('Error in registerStudentsController', 500));
  }
};

module.exports = { registerStudentsController };

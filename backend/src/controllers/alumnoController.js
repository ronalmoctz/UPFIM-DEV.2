const fs = require('fs').promises;
const { insertStudentsMassive } = require('../service/alumnoService');
const { parseExcel } = require('../helpers/excelHelper');

const registerStudentsMassive = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Can not update the file' });
    }

    //Proccess Excel file and get data
    const alumnos = await parseExcel(req.file.path);

    //Insert students massive form
    const result = await insertStudentsMassive(alumnos);

    //Delete the file after processing
    await fs.unlink(req.file.path);

    res.status(200).json({ message: 'Student now register success', result });
  } catch (error) {
    // Ensure the file is deleted even if there's an error
    if (req.file) {
      await fs.unlink(req.file.path); // Delete the file in case of error
    }
    next(error); // Send error to errorHandler middleware
  }
};

module.exports = { registerStudentsMassive };

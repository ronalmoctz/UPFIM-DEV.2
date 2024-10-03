const fs = require('fs').promises;
const { insertStudentsMassive } = require('../service/alumnoService');
const { parseExcel } = require('../helpers/excelHelper');

const registerStudentsMassive = async (req, res, next) => {
  try {
    console.log('Iniciando el proceso de registro masivo de alumnos');
    if (!req.file) {
      console.error('No se recibió ningún archivo');
      return res.status(400).json({ message: 'Can not update the file' });
    }

    console.log('Archivo recibido:', req.file);

    //Proccess Excel file and get data
    const alumnos = await parseExcel(req.file.path);
    console.log('Alumnos extraídos del archivo:', alumnos);

    //Insert students massive form
    const result = await insertStudentsMassive(alumnos);
    console.log('Resultado de la inserción masiva:', result);

    //Delete the file after processing
    await fs.unlink(req.file.path);
    console.log('Archivo eliminado correctamente');

    res.status(200).json({ message: 'Student now register success', result });
  } catch (error) {
    console.error('Error durante el registro masivo de alumnos:', error);
    // Ensure the file is deleted even if there's an error
    if (req.file) {
      await fs.unlink(req.file.path); // Delete the file in case of error
    }
    next(error); // Send error to errorHandler middleware
  }
};

module.exports = { registerStudentsMassive };

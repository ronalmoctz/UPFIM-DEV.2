const db = require('../database/db');
const docenteService = require('../service/docentesService');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

// Function to validate data for "docentes"
const validateDocenteData = (docente) => {
  const requiredFields = [
    'idUser',
    'userName',
    'pass',
    'teacherName',
    'surnameP',
    'surnameM',
    'email',
    'profile_img',
    'grado',
  ];

  for (const field of requiredFields) {
    if (!docente[field]) {
      throw new AppError(`Falta el campo ${field} en datos de docente`, 400);
    }
  }
};

const insertDocente = async (req, res, next) => {
  try {
    const { docentes } = req.body;
    if (!docentes || !Array.isArray(docentes) || docentes.length === 0) {
      logger.warn('Datos de docentes incorrectos o vacíos');
      return next(new AppError('Datos incorrectos para docentes', 400));
    }
    for (const docente of docentes) {
      validateDocenteData(docente);
    }
    const result = await docenteService.insertDocente(docentes);
    logger.info(
      `Docentes insertados exitosamente: ${docentes.length} registros`,
    );
    res.status(201).json({
      status: 'success',
      message: 'Docentes insertados correctamente',
      data: result,
    });
  } catch (error) {
    logger.error(`Error en insertDocente: ${error.message}`);
    return next(error);
  }
};

const getDocentes = async (req, res) => {
  try {
    const [results] = await db.query('CALL getDocentes()');
    res.json(results[0]);  
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const getDocente = async (req, res) => {
  try {
    const [results] = await db.query('CALL getDocente()');
    res.json(results[0]);  
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

module.exports = { getDocentes, insertDocente, getDocente };

const db = require('../database/db');
const docenteService = require('../service/docentesService');
const AppError = require('../errors/AppError');

const insertDocente = async (req, res, next) => {
  try {
    const { docentes } = req.body;
    console.log(docentes);

    if (!docentes || !Array.isArray(docentes) || docentes.length === 0) {
      return next(new AppError('Incorrect data for docentes', 400));
    }

    for (const docente of docentes) {
      if (
        !docente.idUser ||
        !docente.userName ||
        !docente.pass ||
        !docente.teacherName ||
        !docente.surnameP ||
        !docente.surnameM ||
        !docente.email ||
        !docente.profile_img ||
        !docente.grado
      ) {
        return next(
          new AppError('Datos faltantes o incorrectos para docente', 400)
        );
      }
    }

    const result = await docenteService.insertDocente(docentes);
    console.log(docentes);

    res.status(201).json({
      status: 'success',
      message: 'Docente insertados correctamente',
      data: result,
    });
  } catch (error) {
    next(error);
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

module.exports = { getDocentes, insertDocente };

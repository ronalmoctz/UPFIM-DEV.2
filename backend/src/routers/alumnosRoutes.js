const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  registerStudentsController,
} = require('../controllers/alumnoController');
const db = require('../database/db');
const insertService = require('../service/testAlumnoInsert');

router.get('/getAlumnos', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT nombre, aPater, aMater, correo FROM alumnos',
    );
    res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching alumnos', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching alumnos',
    });
  }
});

// Define the file filter to accept only Excel or CSV file
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'text/csv', // .csv
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); //File is valid
  } else {
    cb(
      new Error('Invalid file type. Only Excel or CSV files are allowed.'),
      false,
    ); //Rejec file
  }
};

//Set up multer whith the fileFilter and destination folder
const upload = multer({ dest: 'upload/', fileFilter });

// Router for uploading the Excel/CSV file
router.post(
  '/alumno/update',
  upload.single('File'),
  registerStudentsController,
);

router.post('/alumno/insert', async (req, res) => {
  const {
    idUser,
    userName,
    pass,
    studentName,
    surnameP,
    surnameM,
    studentGroup,
    email,
    sexo,
    lengua,
    programa,
    cuatrimestre,
  } = req.body;

  try {
    const result = await insertService.insertStudent({
      idUser,
      userName,
      pass,
      studentName,
      surnameP,
      surnameM,
      studentGroup,
      email,
      sexo,
      lengua,
      programa,
      cuatrimestre,
    });

    res.status(200).json({ message: 'Alumno insertado correctamente', result });
  } catch (error) {
    console.error('Error al insertar alumno:', error);
    res.status(500).json({
      message: 'Error al insertar alumno',
      error: error.message || 'Error desconocido',
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/getAlumnos', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT nombre, aPater, aMater, correo FROM alumnos'
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

module.exports = router;

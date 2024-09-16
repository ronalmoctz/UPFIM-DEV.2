const db = require('../database/db');

const getDocentes = async (req, res) => {
  try {
    const [results] = await db.query('CALL getDocentes()');
    res.json(results[0]);  
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

module.exports = { getDocentes };

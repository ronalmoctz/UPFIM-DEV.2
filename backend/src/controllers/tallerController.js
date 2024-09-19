const db = require('../database/db');

const getTalleres = async (req, res) => {
  try {
    const [results] = await db.query('CALL getTalleres()');
    res.json(results[0]);  
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const insertTaller = (req, res) => {
  const { nombre, tipo, estatus } = req.body;
  const img_url = req.file ? req.file.path : null;

  const sql = "CALL insertTaller(?, ?, ?, ?)";
  db.query(sql, [nombre, tipo, img_url, estatus], (err, result) => {
    if (err) {
      console.error("Error al insertar taller:", err);
      res.status(500).json({ error: "Error al insertar taller" });
      return;
    }
    res.status(201).json({ message: "Taller agregado exitosamente", result });
  });
};


module.exports = { getTalleres , insertTaller};

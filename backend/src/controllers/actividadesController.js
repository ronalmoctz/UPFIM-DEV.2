const db = require('../database/db');

const getActividades = async (req, res) => {
  try {
    const [results] = await db.query('CALL getActividades()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const insertActividad = (req, res) => {
  const { titulo, descripcion, tipo, fecha, hora, ubicacion, estado } = req.body;
  const img_url = req.file ? req.file.path : null;

  const sql = "CALL insertActividad(?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [titulo, descripcion, tipo, fecha, hora, ubicacion, img_url, estado],
    (err, result) => {
      if (err) {
        console.error("Error al insertar actividad:", err);
        res.status(500).json({ error: "Error al insertar actividad" });
        return;
      }
      res.status(201).json({ message: "Actividad agregada exitosamente", result });
    }
  );
};


module.exports = { getActividades, insertActividad};

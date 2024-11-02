const db = require('../database/db');
const cloudinary = require('cloudinary').v2;

const getTalleres = async (req, res) => {
  try {
    const [results] = await db.query('CALL getTalleres()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const getTallerCrud = async (req, res) => {
  try {
    const [results] = await db.query('CALL getTallerQrud()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const insertarTaller = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "La imagen es requerida." });
    }
    const img_url_taller = req.file.path;
    const {
      nombre_taller,
      tipo_taller,
      estatus_taller,
      nombre_docente_completo,
      grupos,
    } = req.body;
    const tiposValidos = ['deportiva', 'cultural'];
    if (!tiposValidos.includes(tipo_taller)) {
      return res.status(400).json({ error: "Tipo de taller inválido." });
    }
    if (!Number.isInteger(Number(estatus_taller))) {
      return res.status(400).json({ error: "Estatus del taller debe ser un número entero." });
    }
    let grupos_json;
    try {
      grupos_json = JSON.parse(grupos);
    } catch (error) {
      return res.status(400).json({ error: "Formato JSON inválido en 'grupos'." });
    }
    if (!Array.isArray(grupos_json)) {
      return res.status(400).json({ error: "El campo 'grupos' debe ser un array." });
    }
    const [result] = await db.query(
      "CALL insertar_taller_con_grupos(?, ?, ?, ?, ?, ?)",
      [
        nombre_taller,
        tipo_taller,
        img_url_taller,
        estatus_taller,
        nombre_docente_completo,
        JSON.stringify(grupos_json),  
      ]
    );
    res.status(200).json({
      message: "Taller insertado correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error al insertar el taller:", error);
    res.status(500).json({ error: "Ocurrió un error al insertar el taller: " + error.message });
  }
};

module.exports = { getTalleres, getTallerCrud, insertarTaller };

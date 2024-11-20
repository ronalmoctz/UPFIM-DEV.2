const db = require('../database/db');
const cloudinary = require('cloudinary').v2;

const getAllFeaturedImages = async (req, res) => {
  try {
    const [results] = await db.query('CALL getAllFeaturedImages()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const getByIdfeaturedImages = async (req, res) => {
  const id_featuredImage = req.params.id_featuredImage;
  const sql = 'CALL getByIdfeaturedImages(?)';
  try {
    const [results] = await db.query(sql, [id_featuredImage]);
    if (results[0].length === 0) {
      return res.status(404).json({ message: 'Imagen no encontrada' });
    }
    return res.status(200).json(results[0][0]);
  } catch (err) {
    console.error('Error al obtener la imagen:', err);
    return res.status(500).json({ error: 'Error al obtener la imagen' });
  }
};

const insertFeaturedImages = async (req, res) => {
  const { description } = req.body;
  const img_url = req.file ? req.file.path : null;
  if (!img_url) {
    return res.status(400).json({ error: 'Se requiere una imagen válida' });
  }
  try {
    const [countResult] = await db.query('SELECT COUNT(*) AS count FROM featured_images');
    const currentCount = countResult[0].count;
    if (currentCount >= 10) {
      return res.status(400).json({ error: 'Se ha alcanzado el número máximo de 10 registros permitidos' });
    }
    const sql = 'CALL insertFeaturedImages(?, ?)';
    const [result] = await db.query(sql, [img_url, description]);
    return res.status(201).json({
      message: 'Imagen agregada exitosamente',
      result,
    });
  } catch (err) {
    console.error('Error al insertar imagen:', err);
    return res.status(500).json({ error: 'Error al insertar imagen' });
  }
};



module.exports = {
  getAllFeaturedImages,
  getByIdfeaturedImages,
  insertFeaturedImages
};

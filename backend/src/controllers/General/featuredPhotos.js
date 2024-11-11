const db = require('../../database/db');
const cloudinary = require('cloudinary').v2;

const getPhotosIconic = async (req, res) => {
  try {
    const [results] = await db.query('CALL allImages()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

 const insertImage = async (req, res) => {
  const { url_img, descripcion, nombre_completo } = req.body;
  if (!url_img || !descripcion || !nombre_completo) {
    return res.status(400).json({ error: 'Faltan datos. Asegúrese de proporcionar url_img, descripcion y nombre_completo.' });
  }
  try {
    const [result] = await db.query('CALL insertImage(?, ?, ?)', [url_img, descripcion, nombre_completo]);
    res.status(200).json({ message: 'Imagen insertada exitosamente en la galería', data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPhotosIconic, insertImage};

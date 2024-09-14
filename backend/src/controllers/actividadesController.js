const db = require('../database/db');

const getActividades = async (req, res, next) => {
  const { fecha } = req.query;

  try {
    const [actividades] = await db.query(
      `SELECT descripcion, tipo, fecha, hora, img_url
            FROM actividades WHERE fecha = ? ORDER BY hora ASC`,
      [fecha]
    );
    if (actividades.length === 0) {
      return res
        .status(404)
        .json({ message: 'No hay actidades para esa fecha' });
    }

    res.status(200).json({ actividades });
  } catch (error) {
    next(error);
  }
};

module.exports = { getActividades };

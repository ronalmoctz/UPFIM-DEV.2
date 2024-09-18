const bcrypt = require('bcrypt');
const { createUser } = require('../service/userService');
const db = require("../database/db");

const registerUserController = async (req, res) => {
  const { userName, password, userRol } = req.body;

  try {
    const hashesPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(userName, hashesPassword, userRol);

    res
      .status(201)
      .json({ message: 'Usuario creado exitosamente', user: newUser });
  } catch (error) {
    console.error('Error al crear el usuario'.error);
    res
      .status(500)
      .json({
        message: 'Error al crear el usuario',
        error: error.message || 'Desconocido',
      });
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


module.exports = { registerUserController, insertTaller };

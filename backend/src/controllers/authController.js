// src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByUsername } = require('../service/userService');

const loginController = async (req, res) => {
  const { userName, password } = req.body;

  try {
    // Buscar al usuario por el nombre de usuario
    const user = await getUserByUsername(userName);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si la contraseña es válida
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credencial incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      {
        id: user.id_User, // Ajusta los campos según tu base de datos
        userName: user.userName,
        role: user.userRol,
      },
      process.env.JWT_TOKEN,
      { expiresIn: process.env.JWT_EXPIRES_IN || '30min', algorithm: 'HS256' }
    );

    // Devolver el token al cliente
    res.json({ token, message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { loginController };

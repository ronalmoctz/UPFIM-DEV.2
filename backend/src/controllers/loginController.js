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
    const accesToken = jwt.sign(
      {
        id: user.id_User, // Ajusta los campos según tu base de datos
        userName: user.userName,
        role: user.userRol,
      },
      process.env.JWT_TOKEN,
      { expiresIn: '30min', algorithm: 'HS256' }
    );

    // Generate refeshToken (duracion de 30 dias)
    const refreshToken = jwt.sign(
      {
        id: user.id_User,
        userName: user.userName,
      },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: '30d', algorithm: 'HS256' }
    );

    //Configuration for cookie HTTP-Only
    res.cookie('jwt', accesToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 30 * 60 * 1000,
    });

    // Send the refreshToken in other cookie HHTP-only
    res.cookie('refreshToken', refreshToken, {
      hhtpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    // Devolver el token al cliente
    res.json({ accesToken, message: 'Inicio de sesión exitoso' });
    console.log('Token generated and sent to client:', accesToken);
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = { loginController };

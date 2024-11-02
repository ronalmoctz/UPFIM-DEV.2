const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByUsername } = require('../service/userService');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const loginController = async (req, res, next) => {
  const { userName, password } = req.body;

  try {
    // Buscar al usuario por el nombre de usuario
    const user = await getUserByUsername(userName);
    if (!user) {
      logger.warn(
        `Intento de inicio de sesion con usuario no eontrado: ${userName}`,
      );
      return next(new AppError('Usuario no entrado', 400));
    }

    // Verificar si la contraseña es válida
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      logger.warn(`Credenciales incorrectas para el usuario:  ${userName}`);
      return next(new AppError('Credenciales incorrectas', 400));
    }

    // Verificar que JWT_TOKEN y JWT_REFRESH_TOKEN estén definidos
    if (!process.env.JWT_TOKEN || !process.env.JWT_REFRESH_TOKEN) {
      logger.error(
        'JWT_TOKEN o JWT_REFRESH_TOKEN no están definidos en las variables de entorno',
      );
      return next(new AppError('Error en configuración del servidor', 500));
    }

    // Generar el token JWT
    const accesToken = jwt.sign(
      {
        id: user.id_User,
        userName: user.userName,
        role: user.userRol,
      },
      process.env.JWT_TOKEN,
      console.log('JWT_TOKEN', process.env.JWT_TOKEN),
      { expiresIn: process.env.JWT_REFRESH_IN, algorithm: 'HS256' },
    );

    // Generate refeshToken (duracion de 30 dias)
    const refreshToken = jwt.sign(
      {
        id: user.id_User,
        userName: user.userName,
      },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: '30d', algorithm: 'HS256' },
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
    logger.info(`Token generado para usuario: ${userName}`);
    res.json({ accesToken, message: 'Inicio de sesion exitoso' });
  } catch (error) {
    logger.error(`Error en loginController: ${error.nessage}`);
    return next(new AppError('Error en el inicio de sesion', 500));
  }
};

module.exports = { loginController };

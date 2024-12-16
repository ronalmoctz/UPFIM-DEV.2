const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.jwt || req.headers['authorization'];
    if (!token) {
      logger.warn('Acceso bloqueado: No se proporcionó un token');
      return next(new AppError('No autenticado', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN, {
      algorithms: ['HS256'],
    });
    req.user = decoded;
    console.log('Decoded JWT payload:', req.user);
    next();
  } catch (error) {
    logger.error(`Token inválido o expirado: ${error.message}`);
    next(new AppError('Token inválido o expirado', 403));
  }
};

module.exports = verifyToken;

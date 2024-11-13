const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      logger.warn('Acceso sin token');
      return next(new AppError('No autenticado', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error(`Token inválido o expirado: ${error.message}`);
    next(new AppError('Token inválido o expirado', 403));
  }
};

module.exports = verifyToken;

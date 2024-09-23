const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

const verifyToken = (req, res, next) => {
  console.log('Verifying token...');
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return next(new AppError('No token provided', 401)); // Usamos AppError
  }

  const token = authHeader.split(' ')[1];
  console.log('Received token:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    console.log('Token decoded: ', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed', error);
    return next(new AppError('Token no válido', 401)); // Usamos AppError
  }
};

// Verificación de si es admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(
      new AppError('Acceso denegado. Solo para administradores', 403)
    );
  }
  next();
};

module.exports = { verifyToken, isAdmin };

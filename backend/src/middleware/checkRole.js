const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  req.session = { user: null }; // -> inicia la sesion

  if (!token) {
    return next(new AppError('No token provided, 401'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    req.session.user = decoded; //Asigan el usuario decodificado a la sesion
    next();
  } catch (error) {
    return next(new AppError('Token no valiod', 401));
  }
};

// Verify rol
const checkRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new AppError('Acceso denegado. Rol no autorizado', 403));
  }
  next();
};

module.exports = { verifyToken, checkRole };

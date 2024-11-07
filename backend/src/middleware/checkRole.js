const AppError = require('../errors/AppError');

const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return next(new AppError('No autenticado', 401));
    if (!allowedRoles.includes(req.user.role)) {
      return next(new AppError('No autorizado para esta ruta', 403));
    }
    next();
  };
};

module.exports = checkRole;

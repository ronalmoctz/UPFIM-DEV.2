const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return next(new AppError('No autenticado', 401));

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    next(new AppError('Token invalido o expirado', 403));
  }
};

module.exports = verifyToken;

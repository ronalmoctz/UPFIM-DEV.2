const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error({
    message: err.message,
    stack: err.stack,
    statusCode: err.statusCode,
    requestUrl: req.originalUrl,
    method: req.method,
    ip: req.ip,
  });

  if (!(err instanceof AppError)) {
    err = new AppError('An unexpected error ocurred', 500);
  }

  console.error(err);

  res.status(err.statusCode || 500).json({
    status: err.status,
    message: err.isOperational ? err.message : 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };

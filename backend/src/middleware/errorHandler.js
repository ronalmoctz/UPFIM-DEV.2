const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  if (!(err instanceof AppError)) {
    // Wrap unexpected errors in AppError for uniformity
    err = new AppError('An unexpected error ocurred', 500);
    err.isOperational = false; // Non-operational errors are unexpected
  }

  const statusCode = err.statusCode || 500;
  const response = {
    status: err.status,
    message: err.isOperational ? err.message : 'Internal Server Error',
  };

  // Add astack trance only in non-production enviroments
  if (process.env.NODE_ENV !== 'production') response.stack = err.stack;

  if (statusCode >= 500) {
    // Log the error
    logger.error({
      message: err.message,
      stack: err.stack,
      statusCode: err.statusCode,
      requestUrl: req.originalUrl,
      method: req.method,
      ip: req.ip,
    });
  } else {
    logger.warn({
      message: err.message,
      statusCode,
      requestUrl: req.originalUrl,
      method: req.method,
      ip: req.ip,
    });
  }

  res.status(statusCode).json(response);
};

module.exports = { errorHandler };

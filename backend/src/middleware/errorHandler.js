const AppError = require('../errors/AppError');
const LogService = require('../utils/LogsService');
const { v4: uuidv4 } = require('uuid'); // UUID para errores críticos

const errorHandler = (err, req, res, next) => {
  //generate unique id for each error
  let uniqueId;
  if (!(err instanceof AppError)) {
    uniqueId = uuidv4();

    // Critical logger error with LogService
    LogService.logError(err, req);

    err = new AppError(
      `Unexpected Errro[ID: ${uniqueId}]`,
      500,
      false,
      //indicate isent a operational error
    );
  }

  //Define response
  const statusCode = err.statusCode || 500;
  const response = {
    status: err.status,
    message: err.isOperational ? err.message : 'Internal Server Error',
  };

  // Agree the error stack in environments not in production
  if (process.env.NODE_ENV !== 'production') {
    response.stack = err.stack;
  }

  // Error logger not critical or warning
  if (statusCode < 500) {
    LogService.logWarning(err.message, {
      statusCode,
      requestUrl: req.originalUrl,
      method: req.method,
      ip: req.ip,
    });
  }

  // Send the response
  res.status(statusCode).json(response);

  // Prevent the error from reaching the global error handler
  next();
}; // Error handler global

module.exports = errorHandler;

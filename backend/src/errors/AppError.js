class AppError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }

  static dbError(message = 'Database Error') {
    return new AppError(message, 400);
  }

  static validationError(message = 'Invalid Input') {
    return new AppError(message, 400);
  }

  static notFoundError(message = 'Not Found') {
    return new AppError(message, 404);
  }

  static unauthorizedError(message = 'Unauthorized') {
    return new AppError(message, 401);
  }

  static authError(message = 'Authentication Error') {
    return new AppError(message, 401);
  }
  static forbiddenError(message = 'Acess Forbidden') {
    return new AppError(message, 403);
  }

  static notFoundError(message = 'Resource Not Found') {
    return new AppError(message, 404);
  }

  static serviceUnavailable(message = 'Service Unavailable') {
    return new AppError(message, 503);
  }

  static adError(message = 'Admin Error') {
    return new AppError(message, 500);
  }
}

module.exports = AppError;

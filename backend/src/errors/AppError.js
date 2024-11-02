class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  static dbError(message = 'Database Error') {
    return new AppError(message, 400);
  }

  static validationError(message = 'Invalid Input') {
    return new AppError(message, 400);
  }
}

module.exports = AppError;

const { logger } = require('./logger');

class LogsService {
  static logError(error, req = null) {
    const logData = {
      message: error.message,
      stack: error.stack,
      ...(req && {
        requestUrl: req.originalUrl,
        method: req.method,
        ip: req.ip,
      }),
    };
    logger.error(logData);
  }

  static logWarning(message, additionalData = {}) {
    logger.warn({ message, ...additionalData });
  }

  static logInfo(message, additionalData = {}) {
    logger.info({ message, ...additionalData });
  }

  static logDebug(message, additionalData = {}) {
    logger.debug({ message, ...additionalData });
  }

  static logHttp(message, additionalData = {}) {
    logger.http({ message, ...additionalData });
  }
}

module.exports = LogsService;

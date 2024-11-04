const pinoHttp = require('pino-http');
const { logger } = require('../utils/logger');

const requestLogger = pinoHttp({
  logger,
  customLogLevel: (res, err) => {
    if (res.statusCode >= 500 || err) return 'error';
    if (res.statusCode >= 400) return 'warn';
    if (res.statusCode >= 100) return 'http';
    return 'debug';
  },
});

module.exports = { requestLogger };

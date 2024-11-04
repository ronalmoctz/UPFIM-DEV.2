const pino = require('pino');

const levels = {
  error: 50,
  warn: 40,
  info: 30,
  http: 20,
  debug: 10,
};

const isProduction = process.env.NODE_ENV === 'production';

const logger = pino({
  level: isProduction ? 'warn' : 'debug',
  customLevels: levels,
  useOnlyCustomLevels: true,
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level(label) {
      return { level: label };
    },
  },

  transport: !isProduction
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
});

module.exports = { logger };

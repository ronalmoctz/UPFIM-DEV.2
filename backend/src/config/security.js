const helmet = require('helmet');

const securityHeaders = helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    },
  },
  frameguard: { action: 'deny' },
  referrerPolicy: { policy: 'same-origin' },
});

module.exports = { securityHeaders };

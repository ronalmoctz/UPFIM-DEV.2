const helmet = require('helmet');

// Security headers middleware
const securityHeaders = helmet({
  contentSecurityPolicy: false,
  frameguard: { action: 'deny' },
  referrerPolicy: { policy: 'same-origin' },
});

module.exports = { securityHeaders };

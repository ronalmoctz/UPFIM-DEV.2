const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const { logger } = require('./utils/logger');
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');
const { securityHeaders } = require('./config/security');
const db = require('./database/db');
const alumnosRoutes = require('./routers/alumnosRoutes');
const actividadesRoutes = require('./routers/actividadesRoutes');

const app = express();

// Security headers with Helmet
app.use(securityHeaders);

// HTTP logging middleware with Morgan and Winston
app.use(requestLogger);

// Middleware for handling errors
app.use(errorHandler);

app.use('/api/alumnos', alumnosRoutes);
app.use('/api', actividadesRoutes);

module.exports = app;

// Define the port where the server will listen
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

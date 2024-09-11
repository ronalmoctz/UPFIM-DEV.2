const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const { logger } = require('./utils/logger');
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');
const { securityHeaders } = require('./config/security');
const db = require('./database/db');

const app = express();

// Security headers with Helmet
app.use(securityHeaders);

// HTTP logging middleware with Morgan and Winston
app.use(requestLogger);

// Middleware for handling errors
app.use(errorHandler);

// Define a route for GET requests to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test-db', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.status(200).json({
      success: true,
      data: rows[0].solution,
    });
  } catch (error) {
    next(error);
  }
});

// Define the port where the server will listen
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

dotenv.config();

// Create a pool global
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection(retries = 3, delay = 3000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await pool.query('SELECT 1');
      logger.info('Conection to the database success');
      return;
    } catch (err) {
      logger.error(
        `Error in the concection: ${err.message} (Try ${attempt} of ${retries})`,
      );

      if (attempt === retries) {
        throw new AppError('No catch connection to database... try again late');
      }

      //Wait before to retry
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

testConnection().catch((error) => {
  // Log aditional in case to critical fail
  logger.error(`Critial error to the connection: ${error.message}`);
  process.exit(1);
});

// Export the pool for use in other modules
module.exports = pool;

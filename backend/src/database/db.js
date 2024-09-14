const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// Create a pool globally
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

// Test the connection
async function testConnection() {
  try {
    // Test the connection
    await pool.query('SELECT 1');
    console.log('Connection successful.');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

testConnection();

// Export the pool for use in other modules
module.exports = pool;

const mysql = require('mysql2');
const dotenv = require('dotenv');

//londing env
dotenv.config();

// Create connection to the database using .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const prosimePool = pool.promise();

module.exports = prosimePool;

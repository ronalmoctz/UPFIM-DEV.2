const pool = require('../database/db');

const createUser = async (userName, hashesPassword, userRol) => {
  const query = `INSERT INTO usertable (userName, password, userRol) VALUES (?, ?, ?)`;
  const [result] = await pool.query(query, [userName, hashesPassword, userRol]);
  return result;
};

const getUserByUsername = async (userName) => {
  try {
    const query = `SELECT * FROM usertable WHERE userName = ?`;
    const [rows] = await pool.query(query, [userName]);
    return rows[0];
  } catch (error) {
    console.error('Error en getUserByusername', error);
    throw error;
  }
};

module.exports = { getUserByUsername, createUser };

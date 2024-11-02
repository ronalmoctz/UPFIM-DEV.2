const pool = require('../database/db');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const insertAdmin = async (adminData) => {
  const { idUser, userName, pass, adminName, surnameP, surnameM, email } =
    adminData;
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.query(
      'CALL admin_admininsert(?, ?, ?, ?, ?, ?, ?)',
      [idUser, userName, pass, adminName, surnameP, surnameM, email],
    );

    await connection.commit(); // Confirm transaction
    console.log(result);
    return result;
  } catch (error) {
    await connection.rollback(); // Reverse transaction on error
    logger.error(`Transaccion in insertAdmin: ${error.message}`);

    //Validating specific errors
    if (error.code === 'ER_DUP_ENTRY') {
      throw AppError.validationError(
        'Duplicate entry dectected for admin data',
      );
    }
    throw AppError.dbError();
  } finally {
    connection.release();
  }
};

module.exports = { insertAdmin };

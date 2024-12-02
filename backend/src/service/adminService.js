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
    logger.error(`Transaction in insertAdmin: ${error.message}`);

    //Validating specific errors
    if (error.code === 'ER_DUP_ENTRY') {
      throw AppError.validationError('Duplicate entry detected for admin data');
    }
    throw AppError.dbError();
  } finally {
    connection.release();
  }
};

// -> Obtener la informacion del administrador
const getAdminInfo = async (adminId) => {
  const query = `CALL GetAdminInfo(?);`;

  try {
    const [rows] = await pool.execute(query, [adminId]);
    if (!rows[0] || rows[0].length === 0) {
      logger.warn(`No admin found with id ${adminId}`);
      throw AppError.notFoundError(`No admin found with id ${adminId}`);
    }

    logger.info(`Found admin with id ${adminId}`);
    return rows[0][0];
  } catch (error) {
    logger.error(`Error to try catch info to admin: ${error.message}`);
    if (error.code === 'ER_SP_DOES_NOT_EXIST') {
      throw AppError.adError(
        'The storage procedure GetAdminInfo doesnt exist in database',
      );
    }
    throw AppError.dbError('A error happened to try recovery admin info');
  }
};

module.exports = { insertAdmin, getAdminInfo };

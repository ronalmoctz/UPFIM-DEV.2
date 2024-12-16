const pool = require('../database/db');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');
const LogService = require('../utils/LogsService');
const { binarySearch } = require('../utils/binarySearch');

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

    if (!rows || rows.length === 0 || rows[0].length === 0) {
      LogService.logWarning(`No admin found with id ${adminId}`);
      throw AppError.notFoundError(`No admin found with id ${adminId}`);
    }

    LogService.logInfo(`Found admin with id ${adminId}`);
    return rows[0][0];
  } catch (error) {
    LogService.logError(`Error while retrieving admin info: ${error.message}`);
    if (error.code === 'ER_SP_DOES_NOT_EXIST') {
      throw AppError.adError(
        'The stored procedure GetAdminInfo doesnt exist in database',
      );
    }
    throw AppError.dbError(
      'An error occurred while trying to retrieve admin info',
    );
  }
};

const getAdmins = async () => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query('CALL getAdmins()');
    console.log(result);
    return result[0]; //The first result is the array of admins
  } catch (error) {
    logger.error(`Error to try catch admins: ${error.message}`);
    throw AppError.dbError('A error happened to try recovery admins');
  } finally {
    connection.release();
  }
};

const updateAdmin = async (id, adminData) => {
  const { userName, nombre, apellidoPaterno, apellidoMaterno, email, estatus } =
    adminData;

  try {
    //get all admins and sort by name
    const [admins] = await connection.query(
      'SELECT id_admin, nombre FROM admin',
    );

    //Sorting admins by name
    admins.sort((a, b) => a.nombre.localeCompare(b.nombre));

    //Searching admin by name
    const adminIndex = binarySearch(admins, (admin) =>
      admin.nombre.localeCompare(nombre),
    );
    if (adminIndex === -1) {
      throw AppError.validationError('Admin not found');
    }

    await connection.beginTransaction();

    //call updateAdmin procedure
    await connection.query('CALL updateAdmin (?,?,?,?,?,?,?)', [
      id,
      userName,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      estatus,
    ]);

    await connection.commit(); // Confirm transaction
    return { id, ...adminData };
  } catch (error) {
    logger.error(`Transaction in updateAdmin: ${error.message}`);
    await connection.rollback(); // Reverse transaction on error
    throw AppError.dbError('A error happened to try recovery admins');
  } finally {
    connection.release(); // Release the connection
  }
};

const deleteAdmin = async (adminId) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query('CALL deleteAdmin(?)', [adminId]);
    console.log(result, 'was deleted', adminId);
    return result;
  } catch (error) {
    logger.error(`Error to try catch deleteAdmin: ${error.message}`);
    await connection.rollback();
    throw AppError.dbError('A error happened to try delete admin');
  } finally {
    connection.release();
  }
};

module.exports = {
  insertAdmin,
  getAdminInfo,
  getAdmins,
  updateAdmin,
  deleteAdmin,
};

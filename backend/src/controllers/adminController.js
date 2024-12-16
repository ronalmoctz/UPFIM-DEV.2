const bcrypt = require('bcrypt');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');
const LogService = require('../utils/LogsService');
const { createUser } = require('../service/userService');
const {
  getAdminInfo,
  insertAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
} = require('../service/adminService');

const registerUserController = async (req, res, next) => {
  const { userName, password, userRol } = req.body;

  try {
    const hashesPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser(userName, hashesPassword, userRol);

    logger.info('Usuario creado exitosamente', { userName, userRol });
    res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: {
        id: newUser.id,
        userName: newUser.userName,
        userRol: newUser.userRol,
      },
    });
  } catch (error) {
    logger.error('Error al crear el usuario', { error: error.message });
    next(new AppError('Error al crear el usuario', 500));
  }
};

const registerAdminController = async (req, res, next) => {
  const { idUser, userName, password, adminName, surnameP, surnameM, email } =
    req.body;
  try {
    if (!userName || !password || !adminName || !surnameP || !email) {
      logger.warn('Faltan campos requeridos en el registro de administrador');
      throw AppError.validationError('Todos los campos son obligatorios');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      logger.warn('Formato de correo electrónico inválido');
      throw AppError.validationError('Formato de correo electrónico inválido');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await insertAdmin({
      idUser,
      userName,
      pass: hashedPassword,
      adminName,
      surnameP,
      surnameM,
      email,
    });
    logger.info(`Administrador ${userName} registrado exitosamente`);
    res.status(201).json({ message: 'Admin registered successfully', result });
  } catch (error) {
    logger.error(`Error al registrar administrador: ${error.message}`);
    next(
      error.isOperational
        ? error
        : AppError.dbError('Error interno al registrar administrador'),
    );
  }
};

const getAdminProfileController = async (req, res, next) => {
  try {
    const adminId = req.user.id; // Recupera el ID del token decodificado
    const adminInfo = await getAdminInfo(adminId);

    if (!adminInfo) {
      logger.warn(`Admin with ID ${adminId} not found`);
      return res.status(404).json({
        success: false,
        message: `No admin found with id ${adminId}`,
      });
    }

    res.status(200).json({
      success: true,
      data: adminInfo,
    });
  } catch (error) {
    logger.error(`Error in getAdminProfileController: ${error.message}`);
    next(error);
  }
};

const getAdminsController = async (req, res, next) => {
  try {
    const admins = await getAdmins();

    if (Array.isArray(admins)) {
      res.status(200).json({
        success: true,
        data: admins,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Error to get admins',
      });
    }
    console.log(admins);
  } catch (error) {
    logger.error(`Error in getAdminsController: ${error.message}`);
    next(error);
  }
};

const validateAdminData = (adminData) => {
  const {
    id_admin,
    userName,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    email,
    estatus,
  } = adminData;
  if (
    !id_admin ||
    !userName ||
    !nombre ||
    !apellidoPaterno ||
    !apellidoMaterno ||
    !email ||
    typeof estatus === 'undefined'
  ) {
    throw AppError.validationError('All fields are required');
  }

  let parsedEstatus;
  if (estatus === 'Activo') parsedEstatus = 1;
  else if (estatus === 'Inactivo') parsedEstatus = 0;
  else if (typeof estatus === 'number') parsedEstatus = estatus;
  else {
    throw AppError.validationError(
      'The estatus field must be "Activo", "Inactivo", 1 or 0',
    );
  }

  return {
    id_admin,
    userName,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    email,
    estatus,
  };
};

const updateAdminController = async (req, res, next) => {
  try {
    const validateData = validateAdminData(req.body);

    const updatedAdmin = await updateAdmin(validateData.id_admin, validateData);

    res.status(200).json({
      success: true,
      message: 'Admin updated successfully',
      data: updatedAdmin,
    });
    console.log(updatedAdmin);
  } catch (error) {
    logger.error(`Error in updateAdminController: ${error.message}`);
    next(new AppError('Error in updateAdminController', 500));
  }
};

const deleteAdminController = async (req, res, next) => {
  const { adminId } = req.body;

  try {
    const result = await deleteAdmin(adminId);
    res.status(200).json({
      success: true,
      message: 'Admin deleted successfully',
      data: result,
    });
  } catch (error) {
    logger.error(`Error in deleteAdminController: ${error.message}`);
    next(new AppError('Error in deleting admin', 500));
  }
};

module.exports = {
  registerUserController,
  registerAdminController,
  getAdminProfileController,
  getAdminsController,
  updateAdminController,
  deleteAdminController,
};

const bcrypt = require('bcrypt');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');
const { createUser } = require('../service/userService');
const { insertAdmin } = require('../service/adminService');

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
    // Validate files
    if (!userName || !password || !adminName || !surnameP || !email) {
      logger.warn('Faltan campos requeridos en el registro de administrador');
      throw AppError.validationError('Todos los campos son obligatorios');
    }

    //Encpryt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await insertAdmin({
      // Call the service for the insert the admin
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
    console.log(result);
  } catch (error) {
    logger.error(`Error al registrar administrador: ${error.message}`);
    next(
      error.isOperational
        ? error
        : AppError.dbError('Error interno al registrar administrador'),
    );
  }
};

module.exports = { registerUserController, registerAdminController };

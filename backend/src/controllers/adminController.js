const bcrypt = require('bcrypt');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');
const { createUser } = require('../service/userService');
const { insertAdmin } = require('../service/adminService');
const db = require('../database/db');

const getAdmin = async (req, res) => {
  try {
    const [results] = await db.query('CALL getAdmin()');
    res.json(results[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

const deleteAdmin = async (req, res) => {
  const { email } = req.body;
  try {
    const [admin] = await db.query(
      'SELECT id_admin FROM admin WHERE email = ?',
      [email],
    );
    if (admin.length === 0) {
      return res.status(404).json({ message: 'El administrador no existe.' });
    }
    await db.query('CALL deleteAdmin(?)', [admin[0].id_admin]);
    res.status(200).json({ message: 'Administrador eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar administrador:', error.message);
    res
      .status(500)
      .json({ error: 'Hubo un error al intentar eliminar el administrador.' });
  }
};

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

// const getAdminInfoController = async (req, res, next) => {
//   try {
//     const { adminId } = req.params;

//     // Validación básica de entrada
//     if (!adminId || isNaN(Number(adminId))) {
//       logger.warn('adminId no válido proporcionado en la solicitud.');
//       throw AppError.validationError('ID de administrador no válido.');
//     }

//     // Llamada al servicio
//     const adminInfo = await getAdminInfo(Number(adminId));

//     res.status(200).json({
//       status: 'success',
//       data: adminInfo,
//     });
//   } catch (error) {
//     logger.error(`Error en getAdminInfoController: ${error.message}`);
//     next(error); // Enviar error al middleware global

const updateAdmin = async (req, res) => {
  const {
    id_admin,
    username,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    email,
    estatus,
  } = req.body;
  if (
    !id_admin ||
    !username ||
    !nombre ||
    !apellidoPaterno ||
    !apellidoMaterno ||
    !email ||
    typeof estatus === 'undefined'
  ) {
    return res.status(400).json({
      error:
        'Todos los campos son obligatorios. Por favor, verifica los datos ingresados.',
    });
  }
  let parsedEstatus;
  if (estatus === 'Activo') {
    parsedEstatus = 1;
  } else if (estatus === 'Inactivo') {
    parsedEstatus = 0;
  } else if (typeof estatus === 'number') {
    parsedEstatus = estatus;
  } else {
    return res.status(400).json({
      error: 'El campo estatus debe ser "Activo", "Inactivo", 1 o 0.',
    });
  }

  try {
    await db.query('CALL updateAdmin(?, ?, ?, ?, ?, ?, ?)', [
      id_admin,
      username,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      parsedEstatus,
    ]);
    res
      .status(200)
      .json({ message: 'Administrador actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar administrador:', error.message);
    res.status(500).json({
      error:
        'Error al actualizar el administrador. Intenta nuevamente más tarde.',
    });
  }
};

module.exports = {
  registerUserController,
  registerAdminController,
  // getAdminInfoController,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};

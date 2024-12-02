const express = require('express');
const { body } = require('express-validator');
const { validateRequest } = require('../middleware/validatonMiddleware');
const { loginController } = require('../controllers/loginController');
const {
  refreshTokenController,
} = require('../controllers/refreshTokenController');
const { registerUserController } = require('../controllers/adminController');
const rateLimit = require('express-rate-limit');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints relacionados con autenticación
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión en el sistema
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: Nombre de usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Login exitoso
 *       429:
 *         description: Demasiados intentos de inicio de sesión
 */
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message:
      'Too many login attempts from this IP, please try again after 15 minutes.',
  },
});

router.post(
  '/login',
  [
    body('userName').isString().notEmpty(),
    body('password').isString().notEmpty(),
  ],
  validateRequest,
  loginLimiter,
  loginController,
);

/**
 * @swagger
 * /refresh-token:
 *   post:
 *     summary: Renueva el token de acceso usando un refresh token
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Token renovado exitosamente
 */
router.post('/refresh-token', refreshTokenController);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *               userRol:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 */
router.post(
  '/register',
  [
    body('userName').isString().notEmpty(),
    body('password').isString().notEmpty(),
    body('userRol').isString().notEmpty(),
  ],
  validateRequest,
  registerUserController,
);

module.exports = router;

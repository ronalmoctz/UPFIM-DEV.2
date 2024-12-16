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

router.post('/refresh-token', refreshTokenController);

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

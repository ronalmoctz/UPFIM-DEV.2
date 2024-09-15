const express = require('express');
const { body } = require('express-validator');
const { validateRequest } = require('../middleware/validatonMiddleware');
const { loginController } = require('../controllers/authController');
const { registerUserController } = require('../controllers/adminController');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiter to restrict the number of login attempts from the same IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    message:
      'Too many login attempts from this IP, please try again after 15 minutes.',
  },
});

//Router for login
router.post(
  '/login',
  [
    body('userName').isString().notEmpty(),
    body('password').isString().notEmpty(),
  ],
  validateRequest,
  loginLimiter, // Apply rate limiter middleware
  loginController
);
//Router for register
router.post(
  '/register',
  [
    body('userName').isString().notEmpty(),
    body('password').isString().notEmpty(),
    body('userRol').isString().notEmpty(),
  ],
  validateRequest,
  registerUserController
);

module.exports = router;

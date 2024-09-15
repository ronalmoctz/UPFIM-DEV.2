const { validationResult } = require('express-validator'); // Asegúrate de usar validationResult

const validateRequest = (req, res, next) => {
  const errors = validationResult(req); // Corregido
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateRequest };

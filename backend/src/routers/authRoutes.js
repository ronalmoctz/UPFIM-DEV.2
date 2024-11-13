const express = require('express');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/status', verifyToken, (req, res) => {
  if (req.user) {
    res.status(200).json({
      isAuthenticated: true,
      role: req.user.userRol,
    });
  } else {
    res.status(401).json({
      isAuthenticated: false,
      message: 'Token no encontrado o inválido',
    });
  }
});

module.exports = router;

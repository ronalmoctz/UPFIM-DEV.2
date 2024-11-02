const express = require('express');
const { verifyToken, checkRole } = require('../middleware/checkRole');
const {
  adminDashboardController,
  alumnoDashboardController,
  docenteDashboardController,
} = require('../controllers/dashboard');

const router = express.Router();

router.get(
  '/dashboard/admin',
  verifyToken,
  checkRole(['admin']),
  adminDashboardController,
);
router.get(
  '/dashboard/alumno',
  verifyToken,
  checkRole(['alumno']),
  alumnoDashboardController,
);
router.get(
  '/dashboard/docente',
  verifyToken,
  checkRole(['docente']),
  docenteDashboardController,
);

module.exports = router;

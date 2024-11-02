const express = require('express');
const { registerAdminController } = require('../controllers/adminController');
const {
  addFeaturedImage,
} = require('../controllers/Dashboard/adminDashboardController');
const { verifyToken, checkRole } = require('../middleware/checkRole');
const router = express.Router();

router.post(
  '/admin/register',
  verifyToken,
  checkRole(['admin']),
  registerAdminController,
);

router.post(
  '/admin/featured-gallery',
  verifyToken,
  checkRole(['admin']),
  addFeaturedImage,
);

module.exports = router;

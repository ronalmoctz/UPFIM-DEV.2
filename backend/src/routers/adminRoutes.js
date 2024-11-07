const express = require('express');
const { registerAdminController } = require('../controllers/adminController');
const {
  addFeaturedImage,
} = require('../controllers/Dashboard/adminDashboardController');
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');
const router = express.Router();

router.post(
  '/register',
  verifyToken,
  checkRole(['admin']),
  registerAdminController,
);
router.post(
  '/featured-gallery',
  verifyToken,
  checkRole(['admin']),
  addFeaturedImage,
);

module.exports = router;

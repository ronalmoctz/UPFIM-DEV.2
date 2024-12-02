const express = require('express');
const {
  gradeStudentController,
} = require('../controllers/Dashboard/docenteDashboardController');
const { body } = require('express-validator');
const { validateRequest } = require('../middleware/validatonMiddleware');

const router = express.Router();

router.post(
  '/grade',
  [
    body('studentId').isInt(),
    body('period').isString(),
    body('cal1').isInt(),
    body('cal2').isInt(),
    body('cal3').isInt(),
  ],
  validateRequest,
  gradeStudentController,
);

module.exports = router;

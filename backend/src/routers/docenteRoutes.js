const express = require('express');
const router = express.Router();
const {
  getDocentes,
  insertDocente,
} = require('../controllers/docenteController');

router.get('/getDocentes', getDocentes);
router.post('/insertDocente', insertDocente);

module.exports = router;

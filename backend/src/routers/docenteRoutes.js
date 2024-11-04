const express = require('express');
const router = express.Router();
const {
  getDocentes,
  insertDocente,
  getDocente
} = require('../controllers/docenteController');
router.get('/getDocentes', getDocentes);
router.post('/insertDocente', insertDocente);
router.get("/getDocente", getDocente);
module.exports = router;

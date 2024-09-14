const express = require('express');
const router = express.Router();
const { getActividades } = require('../controllers/actividadesController');

router.get('/actividades', getActividades);

module.exports = router;

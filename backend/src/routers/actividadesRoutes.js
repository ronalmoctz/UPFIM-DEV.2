const express = require('express');
const router = express.Router();
const { getActividades } = require('../controllers/actividadesController');

router.get('/getActividades', getActividades);

module.exports = router;

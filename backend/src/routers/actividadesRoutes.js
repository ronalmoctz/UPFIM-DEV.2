const express = require('express');
const router = express.Router();
const { getActividades, insertActividad } = require('../controllers/actividadesController');
const uploadActividad = require("../middleware/uploadMiddleware");
router.get('/getActividades', getActividades);
router.post("/insertActividad", uploadActividad.single("imagen"), insertActividad);


module.exports = router;

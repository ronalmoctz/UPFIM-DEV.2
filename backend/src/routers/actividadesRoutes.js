const express = require('express');
const router = express.Router();
const { getActividades, insertActividad } = require('../controllers/actividadesController');
const uploadActividad = require("../middlewares/uploadMiddleware");
router.get('/getActividades', getActividades);
router.post("/insertActividad", uploadActividad.single("imagen"), insertActividad);


module.exports = router;

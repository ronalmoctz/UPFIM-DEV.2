const express = require('express');
const router = express.Router();
const { getActividades, insertActividad, deleteActividad, updateActividad,getActividadById } = require('../controllers/actividadesController');
const uploadActividad = require("../middleware/uploadMiddleware");
router.get('/getActividades', getActividades);
router.post("/insertActividad", uploadActividad.single("imagen"), insertActividad);
router.delete("/deleteActividad/:id_actividad", deleteActividad);
router.put("/updateActividad/:id_actividad", uploadActividad.single("imagen"), updateActividad);
router.get("/getActividad/:id_actividad", getActividadById);
module.exports = router;

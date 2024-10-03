const express = require("express");
const router = express.Router();
const {  getDocentes,getDocente } = require("../controllers/docenteController");
router.get("/getDocentes", getDocentes);
router.get("/getDocente", getDocente);
module.exports = router;

  
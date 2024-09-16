const express = require("express");
const router = express.Router();
const {  getDocentes } = require("../controllers/docenteController");


router.get("/getDocentes", getDocentes);

module.exports = router;

  
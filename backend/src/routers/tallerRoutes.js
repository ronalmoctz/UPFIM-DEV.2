const express = require("express");
const router = express.Router();
const {  getTalleres } = require("../controllers/tallerController");


router.get("/getTalleres", getTalleres);

module.exports = router;

  
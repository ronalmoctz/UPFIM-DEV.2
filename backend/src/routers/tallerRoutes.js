const express = require("express");
const router = express.Router();
const {  getTalleres, insertTaller} = require("../controllers/tallerController");
const uploadTaller = require("../middleware/uploadMiddleware");

router.get("/getTalleres", getTalleres);
router.post("/insertTaller", uploadTaller.single("imagen"), insertTaller);

module.exports = router;

  

const express = require("express");
const router = express.Router();
const { insertTaller } = require("../controllers/adminController");
const uploadTaller = require("../middleware/uploadMiddleware");

router.post("/insertTaller", uploadTaller.single("imagen"), insertTaller);


module.exports = router;

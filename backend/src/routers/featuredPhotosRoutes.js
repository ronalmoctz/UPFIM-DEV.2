const express = require('express');
const router = express.Router();
const {
  getPhotosIconic,
  insertImage,
} = require('../controllers/General/featuredPhotos');
const uploadPhotosIconic = require("../middleware/uploadPhotosIconic");
router.get('/getPhotosIconic', getPhotosIconic);
router.post('/insertImage', uploadPhotosIconic.single("imagen"),insertImage);
module.exports = router;

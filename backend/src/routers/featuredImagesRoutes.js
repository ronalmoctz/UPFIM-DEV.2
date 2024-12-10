const express = require('express');
const router = express.Router();
const {
    getAllFeaturedImages,
    getByIdfeaturedImages,
    insertFeaturedImages,
} = require('../controllers/featuredImagesController');
const uploadFeaturedImage = require("../middleware/uploadFeaturedImages");
router.get('/getAllFeaturedImages', getAllFeaturedImages);
router.get("/getByIdfeaturedImages/:id_featuredImage", getByIdfeaturedImages);
router.post("/insertFeaturedImages", uploadFeaturedImage.single("imagen"), insertFeaturedImages);
module.exports = router;




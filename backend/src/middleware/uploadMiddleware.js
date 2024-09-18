const multer = require("multer");
const { storageTalleres } = require("../utils/cloudinaryConfig");

const uploadTaller = multer({ storage: storageTalleres });

module.exports = uploadTaller;
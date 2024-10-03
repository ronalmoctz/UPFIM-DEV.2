const multer = require("multer");
const path = require("path");
const { storageTalleres } = require('../utils/CloudTaller')
const imageFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const isImage = file.mimetype.startsWith("image/") && (ext === ".png" || ext === ".jpg" || ext === ".jpeg");

  if (!isImage) {
    return cb(new Error("Solo se permiten imágenes en formato PNG o JPG"), false);
  }
  cb(null, true);
};

const uploadTaller = multer({
  storage: storageTalleres,
  fileFilter: imageFilter, 
});

module.exports =  uploadTaller; 

const multer = require("multer");
const path = require("path");
const { storageActividades } = require("../utils/cloudinaryConfig");

const imageFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const isImage = file.mimetype.startsWith("image/") && (ext === ".png" || ext === ".jpg" || ext === ".jpeg");

  if (!isImage) {
    return cb(new Error("Solo se permiten imágenes en formato PNG o JPG"), false);
  }
  cb(null, true);
};

const uploadActividad = multer({
  storage: storageActividades,
  fileFilter: imageFilter, 
});

module.exports = uploadActividad;

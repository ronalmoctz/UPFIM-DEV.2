const multer = require("multer");
const { storageFeaturedImages } = require("../utils/cloudinaryFeaturedImages");
const path = require("path");
const imageFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const isImage = file.mimetype.startsWith("image/") && (ext === ".png" || ext === ".jpg" || ext === ".jpeg");

  if (!isImage) {
    return cb(new Error("Solo se permiten imágenes en formato PNG o JPG"), false);
  }
  cb(null, true);
};

const uploadFeaturedImage = multer({
  storage: storageFeaturedImages, // Usamos el almacenamiento con el nuevo folder
  fileFilter: imageFilter,
});

module.exports = uploadFeaturedImage;

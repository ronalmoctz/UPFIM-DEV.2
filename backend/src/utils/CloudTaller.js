const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storageTalleres = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "talleres",
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => Date.now().toString(), 
  },
});

module.exports = { cloudinary, storageTalleres }
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storageTalleres = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'talleres',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    public_id: (req, file) => Date.now() + path.extname(file.originalname),
  },
});

const storageActividades = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'actividades',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    public_id: (req, file) => Date.now() + path.extname(file.originalname),
  },
});

module.exports = { cloudinary, storageTalleres, storageActividades };

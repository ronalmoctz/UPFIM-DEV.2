const { cloudinary } = require('../utils/cloudinaryConfig');
const AppError = require('../errors/AppError');

const uploadImage = async (filePath, folder) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder });
    return result.secure_url;
  } catch (error) {
    throw AppError.dbError('Error uploading image to Cloudinary');
  }
};

module.exports = { uploadImage };

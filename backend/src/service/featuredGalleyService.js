const { uploadImage } = require('../helpers/cloudinaryHelper');
const AppError = require('../errors/AppError');
const pool = require('../database/db');

const addImageToGalley = async ({ title, imageUrl, filePath }) => {
  try {
    if (!/^https?:\/\/.*\.(jpg|png|webp$)/.test(imageUrl)) {
      throw AppError.validationError('Invalid image URL format');
    }

    const url = filePath
      ? await uploadImage(filePath, 'featured_gallery')
      : imageUrl;

    const query =
      'INSERT INTO featured_gallery (title, image_url) VALUES (?, ?)';
    const [result] = await pool.query(query, [title, url]);

    return result;
  } catch (error) {
    throw AppError.dbError(`Failed to add image to gallery: ${error.message}`);
  }
};

module.exports = { addImageToGalley };

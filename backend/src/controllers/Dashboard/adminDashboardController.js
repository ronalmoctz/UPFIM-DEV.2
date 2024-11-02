const { addImageToGalley } = require('../../service/featuredGalleyService');
const AppError = require('../../errors/AppError');

const addFeaturedImage = async (req, res, next) => {
  try {
    const { title, imageUrl } = req.body;
    const filePath = req.file ? req.file.path : null;
    const result = await addImageToGalley({ title, imageUrl, filePath });

    res.status(201).json({
      status: 'success',
      message: 'Image successfully added to gallery',
      data: result,
    });
  } catch (error) {
    next(AppError.dbError('Failed to add image to gallery'));
  }
};

module.exports = { addFeaturedImage };

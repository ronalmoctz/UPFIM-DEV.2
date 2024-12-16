const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

const refreshTokenController = (req, res, next) => {
  const refeshToken = req.cookies.refeshToken;

  if (!refeshToken) {
    return next(new AppError('No refresh token provided', 401));
  }

  try {
    // Verify the refreshToken
    const decoded = jwt.verify(refeshToken, process.env.JWT_REFRESH_TOKEN);

    // Generate new accessToken
    const accessToken = jwt.sign(
      {
        id: decoded.id_User,
        userName: decoded.userName,
        role: req.id_User ? req.id_User.userRol : null,
      },
      process.env.JWT_TOKEN,
      { expiresIn: '30min', algorithm: 'HS256' },
    );

    // Send new accessToken
    res.cookie('jwt', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 30 * 60 * 1000, // 30 minutos
    });

    res.json({ message: 'Token renovado exitosamente' });
    console.log('Refresh Token:', req.cookies.refreshToken);
  } catch (error) {
    console.error('Error al verificar refresh token', error);
    return next(new AppError('Refresh token no válido o expirado', 401));
  }
};

module.exports = { refreshTokenController };

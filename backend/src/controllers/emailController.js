const transporter = require('../config/nodemailerConfig');
const AppError = require('../errors/AppError');
const { logger } = require('../utils/logger');

const sendEmail = async (req, res, next) => {
  const { firstName, lastName, email, subject, message } = req.body;

  //Basic validation to entry data
  if (!firstName || !lastName || !email || !subject || !message) {
    logger.warn('Datos incompletos en la solicitud de envio de correo');
    return next(new AppError('Todos los campos son obligatorios', 400));
  }

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `Mensaje de ${firstName} ${lastName} (${email}):\n\n${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el email:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
};

module.exports = {
  sendEmail,
};

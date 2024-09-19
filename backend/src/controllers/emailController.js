
const transporter = require('../config/nodemailerConfig');
const sendEmail = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
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

const nodemailer = require('nodemailer');
require('dotenv').config(); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


transporter.verify((error, success) => {
  if (error) {
    console.log('Error de conexión con el servicio de correo:', error);
  } else {
    console.log('Listo para enviar correos');
  }
});

module.exports = transporter;


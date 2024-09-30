const express = require('express');
const { logger } = require('./utils/logger');
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');
const { securityHeaders } = require('./config/security');
const alumnosRoutes = require('./routers/alumnosRoutes');
const actividadesRoutes = require('./routers/actividadesRoutes');
const authRoutes = require('./routers/auth');
const docentesRoutes = require('./routers/docenteRoutes');
const talleresRoutes = require('./routers/tallerRoutes');
const { sendEmail } = require('./controllers/emailController');
const app = express();
const cors = require('cors');
// Parsing JSON
app.use(express.json());
// Security headers with Helmet
app.use(securityHeaders);
// HTTP logging middleware with Morgan and Winston
app.use(requestLogger);
// Middleware for handling errors
app.use(errorHandler);
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
// Manejo de OPTIONS para el correo 
app.options('*', cors());

app.use('/api', alumnosRoutes);
app.use('/api', docentesRoutes);
app.use('/api', actividadesRoutes);
app.use('/api', talleresRoutes);
app.use('/api/auth', authRoutes);
app.post('/api/sendEmail', sendEmail); 
module.exports = app;
// Define the port where the server will listen
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
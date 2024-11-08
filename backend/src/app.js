const express = require('express');
const cookieParser = require('cookie-parser');
const { logger } = require('./utils/logger');
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');
const { securityHeaders } = require('./config/security');
const authRoutes = require('./routers/authRoutes');
const adminRoutes = require('./routers/adminRoutes');
const alumnosRoutes = require('./routers/alumnosRoutes');
const actividadesRoutes = require('./routers/actividadesRoutes');
const loginRoute = require('./routers/loginRoute');
const docentesRoutes = require('./routers/docenteRoutes');
const talleresRoutes = require('./routers/tallerRoutes');
const cors = require('cors');
const { sendEmail } = require('./controllers/emailController');

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

// Parsing JSON
app.use(express.json());
// Security headers with Helmet
app.use(securityHeaders);
// HTTP logging middleware with Morgan and Winston
app.use(requestLogger);

// Manejo de OPTIONS para el correo
app.options('*', cors());

app.use('/api', adminRoutes);
app.use('/api', alumnosRoutes);
app.use('/api', docentesRoutes);
app.use('/api', actividadesRoutes);
app.use('/api', talleresRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', loginRoute);
app.post('/api/sendEmail', sendEmail);

// Middleware for handling errors
app.use(errorHandler);

// Define the port where the server will listen
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

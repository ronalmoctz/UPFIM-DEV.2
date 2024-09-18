const express = require('express');
const { logger } = require('./utils/logger');
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');
const { securityHeaders } = require('./config/security');
// const alumnosRoutes = require('./routers/alumnosRoutes');
const actividadesRoutes = require('./routers/actividadesRoutes');
const authRoutes = require('./routers/auth');
const docentesRoutes = require('./routers/docenteRoutes');
const talleresRoutes = require('./routers/tallerRoutes');
const adminRoutes = require('./routers/adminRoutes');


const app = express();
const cors = require('cors');
// Parsing JSON
app.use(express.json());

app.use(cors());

// Security headers with Helmet
app.use(securityHeaders);

// HTTP logging middleware with Morgan and Winston
app.use(requestLogger);

// Middleware for handling errors
app.use(errorHandler);

app.use('/api', docentesRoutes);
// app.use('/api', alumnosRoutes);
app.use('/api', actividadesRoutes);
app.use('/api', talleresRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', adminRoutes)
//example for access rute api --> http://localhost:3000/api/getTalleres

module.exports = app;

// Define the port where the server will listen
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
                  
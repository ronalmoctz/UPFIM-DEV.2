const morgan = require ('morgan')
const helmet = require('helmet')
const {logger} = require('./utils/logger')
const {requestLogger} = require('./middleware/requestLogger')
const {errorHandler} = require('./middleware/errorHandler')
const {securityheaders}= require('./config/security')


const app = express();

// Security headers with Helmet
app.use(securityHeaders);

// HTTP logging middleware with Morgan and Winston
app.use(requestLogger)

// Define a route for GET requests to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Middleware for handling errors
app.use(errorHandler);

// Define the port where the server will listen
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

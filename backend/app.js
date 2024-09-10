const express = require('express');
const app = express();

// Define a route for GET requests to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port where the server will listen
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

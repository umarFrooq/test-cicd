// Import the Express module
const express = require('express');

// Initialize the Express application
const app = express();

// Define the port number
const PORT = 3000;

// Create a GET route
app.get('/', (req, res) => {
  res.send('hi test cicd');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

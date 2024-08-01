// Import the necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a new route to get the current server time
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.send(`Current server time is: ${currentTime}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

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

// Define a new route to get a useless fact
app.get('/useless-fact', (req, res) => {
  const facts = [
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a 'flamboyance'.",
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "A day on Venus is longer than a year on Venus."
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.send(`Useless fact: ${randomFact}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

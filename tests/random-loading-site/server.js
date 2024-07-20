const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to simulate random loading time
app.get('/loading', (req, res) => {
  // Generate a random delay between 5s (5000ms) and 20s (20000ms)
  const minDelay = 5000; // Minimum delay of 5 seconds
  const maxDelay = 20000; // Maximum delay of 20 seconds
  const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  setTimeout(() => {
    res.send('Hello World!');
  }, randomDelay);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

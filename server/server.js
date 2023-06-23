const express = require('express');
const cors = require('cors');
const app = express();
const port=3000;
const adjectives = ['an awesome', 'a caring', 'a helping', 'a selfless', 'a trustworthy', 'a fearless', 'an honest', 'a dependable', 'a friendly', 'a charming']

// Use the cors middleware
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });
  

// Your other server configurations and routes

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express!' });
});

app.get('/api/whoami', (req, res) => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  res.json({ message: `You are ${adjectives[randomNumber]} person!` });
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

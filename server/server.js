const express = require('express');
const cors = require('cors');
const app = express();
const port=3000;

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
  console.log('Received request from client');
  console.log('Custom header:', req.headers['Custom-Header']);
  res.json({ message: 'You are awesome!' });
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

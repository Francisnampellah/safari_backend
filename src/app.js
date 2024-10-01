const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

app.use(express.json()); // Middleware to parse JSON

// Placeholder route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set up routes
// Example: app.use('/api/users', require('./routes/userRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
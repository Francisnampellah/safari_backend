const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env file

app.use(express.json());  // Middleware to parse JSON

// Set up routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
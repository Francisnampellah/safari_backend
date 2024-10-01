const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const dotenv = require('dotenv');
const tourRoute = require('./src/routes/tourRoute');



dotenv.config();  // Load environment variables from .env file

app.use(express.json());  // Middleware to parse JSON

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/tour', tourRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
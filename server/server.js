const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ origin: 'https://kgelectricautomation.com' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use the email routes
const emailRoutes = require('./routes/emailRoutes');
app.use('/api/email', emailRoutes); // Mount the router with the correct prefix

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
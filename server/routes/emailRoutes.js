const express = require('express');
const { createBusinessRequest } = require('../controllers/emailController');

const router = express.Router();

// Define the route for sending the email
router.post('/sendRequestForm', createBusinessRequest);

module.exports = router; // Ensure the router is exported correctly
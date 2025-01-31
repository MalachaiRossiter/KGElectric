const express = require('express');
const multer = require('multer');
const { createBusinessRequest, createResumeRequest } = require('../controllers/emailController');

const router = express.Router();

//Set up multer for file uploads (store files in uploads directory)
const upload = multer({ dest: 'uploads/' });

// Define the route for sending the email
router.post('/sendRequestForm', createBusinessRequest);
router.post('/sendResumeForm', upload.single('file'), createResumeRequest);

module.exports = router; // Ensure the router is exported correctly
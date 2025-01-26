const express = require('express');
const { createBusinessRequest } = require('../controllers/emailController');

const router = express.Router();

router.post('/sendRequestForm', createBusinessRequest);

module.exports = router;
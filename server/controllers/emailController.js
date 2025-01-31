const { sendEmailService } = require('../services/emailService');
const fs = require('fs');
const path = require('path');

module.exports.createBusinessRequest = async (req, res) => {
    const {firstName, lastName, business, email, phone, zipCode, timeFrame, message} = req.body;

    // Validation function called in function below
    const validateFormData = (formData) => {
        const errors = {};
    
        if (!formData.firstName?.trim()) errors.firstName = 'First Name is required';
        if (!formData.lastName?.trim()) errors.lastName = 'Last Name is required';
        if (!formData.business?.trim()) errors.business = 'Business is required';
        if (!formData.email?.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
    
        // Convert phone to a string and then trim
        if (String(formData.phone)?.trim() && !/^\d{10}$/.test(String(formData.phone))) {
            errors.phone = 'Phone number must be 10 digits';
        }
    
        // Convert zipCode to a string and then trim
        if (String(formData.zipCode)?.trim() && !/^\d{5}$/.test(String(formData.zipCode))) {
            errors.zipCode = 'Zip Code must be 5 digits';
        }
    
        if (!formData.message?.trim()) errors.message = 'Message is required';
    
        return errors;
    };

    const errors = validateFormData(req.body);

    // If validation errors exist, return a response with the errors
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ success: false, errors });
    }
    //creates the email subject and email body
    try {
        const subject = `New Inquiry from ${firstName} ${lastName}`;
        const emailBody = `
            Name: ${firstName} ${lastName}
            Business: ${business}
            Email: ${email}
            Phone: ${phone}
            Zip Code: ${zipCode}
            Time Frame: ${timeFrame}
            Message: ${message}
            `;
    
        //sends the email subject and body to the email services in ../services/emailService
        await sendEmailService(email, subject, emailBody);
        res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
}


//This creates the resume form and sends the email with the resume attached as a pdf file
module.exports.createResumeRequest = async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    const file = req.file; //access uploaded files

    // Validation function called in function below
    const validateFormData = (formData) => {
        const errors = {};
    
        if (!formData.firstName?.trim()) errors.firstName = 'First Name is required';
        if (!formData.lastName?.trim()) errors.lastName = 'Last Name is required';
        if (!formData.email?.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        if (!formData.message?.trim()) errors.message = 'Message is required';
    
        // File validation: Check if file exists and is a valid format
        if (!file) {
            errors.file = 'Resume file is required';
        } else {
            const allowedMimeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']; // PDF, .doc, .docx
            if (!allowedMimeTypes.includes(file.mimetype)) {
                errors.file = 'Invalid file type. Only PDF and Word documents are allowed.';
            }
        }

        return errors;
    };

    const errors = validateFormData(req.body);

    // If validation errors exist, return a response with the errors
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ success: false, errors });
    }
    //creates the email subject and email body
    try {
        const subject = `New Resume from ${firstName} ${lastName}`;
        const emailBody = `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Message: ${message}
            `;

            let attachments = [];
            if (file) {
                attachments.push({
                    filename: file.originalname,
                    path: file.path,
                });
            }
    
        //sends the email subject and body to the email services in ../services/emailService
        await sendEmailService(email, subject, emailBody, attachments);

        // Clean up uploaded file after sending email (optional)
        if (file && fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
        }

        res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
}
const { sendEmailService } = require('../services/emailService');
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
        if (formData.phone?.trim() && !/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number must be 10 digits';
        }
        if (formData.zipCode?.trim() && !/^\d{5}$/.test(formData.zipCode)) {
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
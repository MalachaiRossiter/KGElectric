const nodemailer =  require('nodemailer');

const sendEmailService = async (replyEmail, subject, body, attachments = []) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        },
        logger: true,
        debug: true,
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: replyEmail,
        subject: subject,
        text: body,
        attachments: attachments.length > 0 ? attachments : undefined // Attach only if present
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {sendEmailService};
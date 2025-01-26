const nodemailer =  require('nodemailer');

const sendEmailService = async (toEmail, subject, body) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: toEmail,
        subject: subject,
        text: body,
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {sendEmailService};
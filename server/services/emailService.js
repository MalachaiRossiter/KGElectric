const nodemailer =  require('nodemailer');

const sendEmailService = async (toEmail, subject, body, attachments = []) => {
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
        replyTo: toEmail,
        subject: subject,
        text: body,
        ...body(attachments.length > 0 && { attachments }), //only adds attachment if there is one
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {sendEmailService};
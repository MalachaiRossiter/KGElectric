const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailService = async (replyEmail, subject, body,attachments = []) => {
    const emailData = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_RECEIVER,
    subject,
    text: body,
    reply_to: replyEmail,
    };

  // Attachments (optional)
if (attachments.length > 0) {
    emailData.attachments = attachments.map(att => {
        if (att.path) {
            return {
                filename: att.filename,
                path: att.path,
            };
        } else if (att.content) {
            return {
                filename: att.filename,
                content: att.content, // Buffer or base64
            };
        } else {
            throw new Error(`Attachment ${att.filename} must have a content or path`);
        }
    });
}


    return resend.emails.send(emailData);
};

module.exports = { sendEmailService };

const { mailgun } = require('../configs/mailgun');

const sendMail = async (name, email, subject, html, text) => {
    try {
        const response = await mailgun.messages().send({
            from: name,
            to: email,
            subject: subject,
            html: html,
            text: text
        });
    } catch (error) {
        throw new Error("Error sending email: " + error);
    }
}

module.exports = { sendMail };

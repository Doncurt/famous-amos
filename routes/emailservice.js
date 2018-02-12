// EmailService.js
const nodemailer = require('nodemailer')
const mailgunTransport = require('nodemailer-mailgun-transport')
// Configure transport options set by the .env file
const mailgunOptions = {
  auth: {
    api_key: process.env.MAILGUN_ACTIVE_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  }
};

const transport = mailgunTransport(mailgunOptions);

// EmailService
class EmailService {
  constructor() {
    this.emailClient = nodemailer.createTransport(transport);
  }
// sends the nodemailer email with the reply email attached
  sendText(to, subject, text) {
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail({
          from: 'donovan.adams@students.makeschool.com',
          to,
          subject,
          text,
        }, (err, info) => {
            if (err) { reject(err); }
            // error message
            else {  resolve(info); }
        });
    });
    }
}



module.exports = new EmailService();

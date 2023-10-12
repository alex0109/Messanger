const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      logger: true,
      debug: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnAuthorized: true,
      },
    });
  }

  async sendActiovationMail(to, link) {
    console.log(process.env.SMTP_HOST);
    await this.transporter.sendMail(
      {
        from: process.env.SMTP_USER,
        to,
        subject: "Account activation " + process.env.API_URL,
        text: `${link}`,
      },
      (error, info) => {
        if (error) {
          return console.log("SUKA BLYAT ERROR", error);
        }
        console.log("Message sent: %s", info.messageId);
      }
    );
  }
}

module.exports = new MailService();

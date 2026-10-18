const nodemailer = require("nodemailer");
const { Resend } = require("Resend");

// HTML EMAIL TEMPLATES

// DEVELOPMENT - Nodemailer
const sendDevEmail = async (options) => {
  // 1 Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_EMAIL_HOST,
    port: process.env.MAILTRAP_EMAIL_PORT,
    auth: {
      user: process.env.MAILTRAP_EMAIL_USERNAME,
      pass: process.env.MAILTRAP_EMAIL_PASSWORD,
    },
  });

  // 2 Define email options
  const mailOptions = {
    from: "Naty <naty@diapr.io>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  // 3 Send email with Nodemailer

  await transporter.sendMail(mailOptions);
};

// PRODUCTION - Resend
const sendProdEmail = async (options) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const mailOptions = {
    from: "Naty <naty@diapr.org>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  await resend.emails.send(mailOptions);
};
module.exports = sendProdEmail;

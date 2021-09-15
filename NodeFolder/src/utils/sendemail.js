const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: "apikey",
      pass: "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",
    },
  });

  const mailOptions = {
    from: "info@jobsgum.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;

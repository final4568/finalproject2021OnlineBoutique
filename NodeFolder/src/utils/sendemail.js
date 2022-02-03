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
    from: "exampleapi@moversoman.com",
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

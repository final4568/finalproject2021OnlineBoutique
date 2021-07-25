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
    from: "abcnewstime@abcnewstime.com",
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

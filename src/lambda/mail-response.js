require("dotenv").config();
const nodemailer = require("nodemailer");
const createHtmlMail = require("./modules/mail-template");

exports.handler = function(event, context, callback) {
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASSWORD;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass }
  });

  if (!event.body || !event.body.data) {
    callback(null, {
      statusCode: 400,
      body: 'Mailing details not provided'
    })
  }

  let mailOptions = {
    from: `"Maciej 🥝 Smoothielicious" <${user}>`,
    to: event.body.data.email,
    subject: "🍇 Contact submission received! 🍌",
    html: createHtmlMail({ name: event.body.data.name })
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      });
    }

    console.log(event.body.data);

    callback(null, {
      statusCode: 200,
      body: "mail sent"
    });
  });
};

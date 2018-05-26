require("dotenv").config();
const nodemailer = require("nodemailer");
const createMailTemplate = require("./modules/create-mail-template");

exports.handler = function(event, context, callback) {
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASSWORD;

  console.log('setup transporter');

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass }
  });

  console.log('read data');
  const { data } = JSON.parse(event.body);

  if (!data || !data.email) {
    console.log('data error', data);
    return callback(null, {
      statusCode: 400,
      body: 'Mailing details not provided'
    })
  }

  let mailOptions = {
    from: `"Maciej 🥝 Smoothielicious" <${user}>`,
    to: data.email,
    subject: "🍇 Contact submission received! 🍌",
    html: createMailTemplate({ title: 'Smoothielicious', name: data.name })
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('email sending error');

      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      });
    }

    console.log(data);

    callback(null, {
      statusCode: 200,
      body: "mail sent"
    });
  });
};

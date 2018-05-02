require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASSWORD;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass }
  });

  let mailOptions = {
    from: `"Maciej 🥝 Smoothielicious" <${user}>`,
    to: 'maciek.matuszewski@gmail.com',
    subject: '🍇 Contact submission received!',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      })
    }

    // console.log('Mail sent to:', mailOptions.to);
    console.log(JSON.stringify({ event, context }));

    callback(null, {
      statusCode: 200,
      body: 'mail sent'
    })
});
}
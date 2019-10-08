require('dotenv').config();

const nodemailer = require('nodemailer');

async function SendMail(emails, assunto) {

  // let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    // port: 587,
    // secure: false,
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  });

  let info = await transporter.sendMail({
    from: process.env.email,
    to: emails,
    subject: 'FixUnesp',
    // text: assunto,
    html: assunto
  },
    function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('Email enviado !!'+info);
      }
    }
  );
}

export default SendMail;
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "lol_leonardohiguti@outlook.com",
    pass: "LoLbacon123"
  },
  tls: { rejectUnauthorized: false }
});

const mailOptions = {
  from: 'lol_leonardohiguti@outlook.com',
  to: 'leonardo.higuti@unesp.br',
  subject: 'E-mail enviado usando Node!',
  text: 'Bem fácil, não? ;)'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});

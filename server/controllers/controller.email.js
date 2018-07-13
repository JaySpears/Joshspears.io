const nodemailer = require('nodemailer');
const config = require('./../../config/config');


module.exports = {
  send: (data) => {
    return new Promise((resolve, reject) => {
      let transport = nodemailer.createTransport({
        host: config.email.host,
        port: config.email.port,
        secure: config.email.secure,
        auth: {
          user: config.email.auth.user,
          pass: config.email.auth.pass
        }
      });
      let mailOptions = {
        from: data.email,
        to: config.email.to,
        subject: 'joshspears.io, email from: ' + data.name,
        html: data.information
      };
      transport.sendMail(mailOptions).then(function(info){
        resolve();
      }).catch(function(err){
        reject();
      })
    });
  }
};

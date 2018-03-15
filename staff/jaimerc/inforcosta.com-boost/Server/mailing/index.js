var nodemailer = require('nodemailer');
 
// crear un objeto de transporte reutilizable usando SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});
 
// configura los datos del correo
var mailOptions = {
    from: 'John Doe <johndoe@foo.com>', to: 'jane.mail@foo.com, tim.mail@foo.com',
    subject: 'Hola',
    text: 'Hola Mundo',
    html: '<b>Hola Mundo</b>'
};
 
// Envía el correo con el objeto de transporte definido anteriormente
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
 
    console.log('Mensaje enviado: ' + info.response);
});
var nodemailer = require('nodemailer')
  
const user = process.env.EMAIL_USUARIO
const pass = process.env.EMAIL_CONTRASEÑA
const host = process.env.EMAIL_HOST
const port = process.env.EMAIL_PORT


const sendEmail = {

    // crear un objeto de transporte reutilizable usando SMTP transport
    getTransporter() {

        return transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure: false,
            auth: {
                user: user,
                pass: pass
            }
        })
    },
  
    // configura los datos del correo
    getMailOptions(email) {

        return mailOptions = {
            from: `Jaime Rubio <${user}>`, to: email,
            subject: 'Hola 👻',
            text: 'Hola Mundo',
            html: '<b>Hola Mundo</b>'
        }
    },

    // Envía el correo con el objeto de transporte definido anteriormente
    send(email) {
        const transporter = this.getTransporter()
        const mailOptions = this.getMailOptions(email)

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error)
            }

            console.log('Mensaje enviado: ' + info.response)
        })
    }

}

module.exports = sendEmail
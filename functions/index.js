const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onCall((data, context) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PSW,
        }
    })

    const phone = data.phone ? data.phone.phone : '***'

    const mailOptions = {
        from: 'brangus.app@gmail.com',
        to: 'josefina@masaiviajes.com',
        subject: `Mensaje de contacto de ${data.name}, ${data.email}`,
        html: `
        <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
                <div style="background-color: #5B2482;padding: 2rem;color: #ffffff;">
                    <h3>${data.name} envió un mensaje</h3>
                </div>
                <div style="padding: 2rem;">
                    <p style="font-weight: 600">Mensaje:</p>
                    <p style="margin: 1rem auto; font-style: italic; font-size: 1.2rem;">"${data.msj}"</p>
                    <p><span style="font-weight: 600">e-mail:</span> ${data.email}</p>
                    <p><span style="font-weight: 600">tel:</span> ${phone}</p>
                </div>
            </div>
        </div>
            `
    }

    transporter
        .sendMail(mailOptions)
        .then((res) => {
            return res
        })
        .catch(err => {
            return `Error sendind mail. ${err}`
        })
})

exports.sendInscriptionEmail = functions.https.onCall((data, context) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PSW,
        }
    })

    //TEMPLATES    
    const single = `
        <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
        <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
            <div style="background-color: #5B2482;padding: 2rem;color: #ffffff;">
                <h3>${data.name} envió un mensaje</h3>
            </div>
            <div style="padding: 2rem;">
                <p><span style="font-weight: 600">Nombre:</span> ${data.name}</p>
                <p><span style="font-weight: 600">Apellido:</span> ${data.surname}</p>
                <p><span style="font-weight: 600">Mail:</span> ${data.email}</p>
                <p><span style="font-weight: 600">Tel:</span> ${data.phone}</p>
                <p><span style="font-weight: 600">Pasaporte:</span> ${data.passport}</p>
                <p><span style="font-weight: 600">Pack:</span> ${data.pack}</p>
                <p><span style="font-weight: 600">Traslados:</span> ${data.bus}</p>
                <p><span style="font-weight: 600">Tipo de habitación:</span> ${data.room}</p>
                <p><span style="font-weight: 600">Fecha de nacimiento:</span> ${data.birthDate}</p>
                <p><span style="font-weight: 600">Residencia:</span> ${data.residence}</p>
                <p><span style="font-weight: 600">¿Tiene algún requerimiento especial de alimentación?</span> ${data.questionA}</p>
                <p><span style="font-weight: 600">¿Tiene alguna enfermedad que desee informar?</span> ${data.questionB}</p>
                <p><span style="font-weight: 600">¿Tiene alguna dificultad motriz o física?</span> ${data.questionC}</p>
                <p><span style="font-weight: 600">¿Tiene algún tipo de alergia?</span> ${data.questionD}</p>
                </div>
            </div>
        </div>
    `

    const double = `
        <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
                <div style="background-color: #5B2482;padding: 2rem;color: #ffffff;">
                    <h3>${data.name} envió un mensaje</h3>
                </div>
                <div style="padding: 2rem;">
                    <p><span style="font-weight: 600">Nombre:</span> ${data.name}</p>
                    <p><span style="font-weight: 600">Apellido:</span> ${data.surname}</p>
                    <p><span style="font-weight: 600">Mail:</span> ${data.email}</p>
                    <p><span style="font-weight: 600">Pasaporte:</span> ${data.passport}</p>
                    <p><span style="font-weight: 600">Residencia:</span> ${data.residence}</p>
                    <p><span style="font-weight: 600">Tel:</span> ${data.phone}</p>
                    <p><span style="font-weight: 600">Pack:</span> ${data.pack}</p>
                    <p><span style="font-weight: 600">Traslados:</span> ${data.bus}</p>
                    <p><span style="font-weight: 600">Tipo de habitación:</span> ${data.room}</p>
                    <p><span style="font-weight: 600">Fecha de nacimiento:</span> ${data.birthDate}</p>
                    <p>Acompañante 1</p>
                    <p><span style="font-weight: 600">Nombre:</span> ${data.additionalOneName}</p>
                    <p><span style="font-weight: 600">Apellido:</span> ${data.additionalOneSurname}</p>
                    <p><span style="font-weight: 600">Pasaporte:</span> ${data.additionalOnePassport}</p>
                    <p><span style="font-weight: 600">Fecha de nacimiento:</span> ${data.birthDateOne}</p>
                    <p><span style="font-weight: 600">Residencia:</span> ${data.additionalOneResidence}</p>
                    <p>Preguntas</p>
                    <p><span style="font-weight: 600">¿Tiene algún requerimiento especial de alimentación?</span> ${data.questionA}</p>
                    <p><span style="font-weight: 600">¿Tiene alguna enfermedad que desee informar?</span> ${data.questionB}</p>
                    <p><span style="font-weight: 600">¿Tiene alguna dificultad motriz o física?</span> ${data.questionC}</p>
                    <p><span style="font-weight: 600">¿Tiene algún tipo de alergia?</span> ${data.questionD}</p>
                </div>
            </div>
        </div>
    `

    const triple = `
        <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
                <div style="background-color: #5B2482;padding: 2rem;color: #ffffff;">
                    <h3>${data.name} envió un mensaje</h3>
                </div>
                <div style="padding: 2rem;">
                    <p><span style="font-weight: 600">Nombre:</span> ${data.name}</p>
                    <p><span style="font-weight: 600">Apellido:</span> ${data.surname}</p>
                    <p><span style="font-weight: 600">Mail:</span> ${data.email}</p>
                    <p><span style="font-weight: 600">Pasaporte:</span> ${data.passport}</p>
                    <p><span style="font-weight: 600">Residencia:</span> ${data.residence}</p>
                    <p><span style="font-weight: 600">Tel:</span> ${data.phone}</p>
                    <p><span style="font-weight: 600">Pack:</span> ${data.pack}</p>
                    <p><span style="font-weight: 600">Traslados:</span> ${data.bus}</p>
                    <p><span style="font-weight: 600">Tipo de habitación:</span> ${data.room}</p>
                    <p><span style="font-weight: 600">Fecha de nacimiento:</span> ${data.birthDate}</p>
                    <p>Acompañante 1</p>
                    <p><span style="font-weight: 600">Nombre:</span> ${data.additionalOneName}</p>
                    <p><span style="font-weight: 600">Apellido:</span> ${data.additionalOneSurname}</p>
                    <p><span style="font-weight: 600">Pasaporte:</span> ${data.additionalOnePassport}</p>
                    <p><span style="font-weight: 600">Fecha de nacimiento:</span> ${data.birthDateOne}</p>
                    <p><span style="font-weight: 600">Residencia:</span> ${data.additionalOneResidence}</p>
                    <p>Acompañante 2</p>
                    <p><span style="font-weight: 600">Nombre:</span> ${data.additionalTwoName}</p>
                    <p><span style="font-weight: 600">Apellido:</span> ${data.additionalTwoSurname}</p>
                    <p><span style="font-weight: 600">Pasaporte:</span> ${data.additionalTwoPassport}</p>
                    <p><span style="font-weight: 600">Fecha de nacimiento:</span> ${data.birthDateTwo}</p>
                    <p><span style="font-weight: 600">Residencia:</span> ${data.additionalTwoResidence}</p>
                    <p>Preguntas</p>
                    <p><span style="font-weight: 600">¿Tiene algún requerimiento especial de alimentación?</span> ${data.questionA}</p>
                    <p><span style="font-weight: 600">¿Tiene alguna enfermedad que desee informar?</span> ${data.questionB}</p>
                    <p><span style="font-weight: 600">¿Tiene alguna dificultad motriz o física?</span> ${data.questionC}</p>
                    <p><span style="font-weight: 600">¿Tiene algún tipo de alergia?</span> ${data.questionD}</p>
                </div>
            </div>
        </div>
    `

    let template = single

    if(data.enableSecondPerson) template = double

    if(data.enableThirdPerson) template = triple

    const mailOptions = {
        from: 'brangus.app@gmail.com',
        to: 'josefina@masaiviajes.com',
        subject: `Mensaje de contacto de ${data.name}, ${data.email}`,
        html: template,
    }

    transporter
        .sendMail(mailOptions)
        .then((res) => {
            return res
        })
        .catch(err => {
            return `Error sendind mail. ${err}`
        })
})
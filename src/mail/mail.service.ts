import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {


    private transport;


    onModuleInit() {

        this.transport = nodemailer.createTransport({
            host: 'smtp.mailgun.org',
            port: 587,
            // secure: true, // upgrade later with STARTTLS
            // service: 'gmail',
            auth: {
                user: process.env.MAIL_GUN_USERNAME,
                pass: process.env.MAIL_GUN_PASSWORD,
            },
        });

        // (async () => {
        //     await this.transport.sendMail({
        //         from: 'soheyl@gmail.com', // sender address
        //         to: 'me@jasonjafari.com', // list of receivers
        //         subject: 'Hello  Soheyl✔', // Subject line
        //         text: 'Hello world?', // plain text body
        //         html: '<b>Hello world?</b>', // html body
        //     });
        // })();


        //
    }


    async sendEmail({
        email,
        subject,
        htmlBody
    }) {
        await this.transport.sendMail({
            from: 'info@mail.codevteache.com', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: htmlBody
        });
    }


}

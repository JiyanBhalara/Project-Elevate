import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private cfg: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: cfg.get<string>('SMTP_USER'),
        pass: cfg.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendContactMail(dto: ContactDto) {
    const { name, email, subject, message } = dto;

    await this.transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'jiyanbhalara0505@gmail.com',
      subject: `[Portfolio] ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
  }
}

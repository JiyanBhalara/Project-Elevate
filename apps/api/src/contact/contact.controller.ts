// apps/api/src/contact/contact.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ContactDto } from '../mail/dto/contact.dto';
import { MailService } from '../mail/mail.service';

@Controller('contact')            // <-- makes /contact
export class ContactController {
  constructor(private readonly mail: MailService) {}

  @Post()
  async send(@Body() dto: ContactDto) {
    await this.mail.sendContactMail(dto);
    return { ok: true };
  }
}

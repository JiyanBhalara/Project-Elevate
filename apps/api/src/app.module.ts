import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),ProjectsModule, ContactModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

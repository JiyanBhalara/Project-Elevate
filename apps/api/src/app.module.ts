import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load local .env in dev; in prod (Vercel) it'll skip .env and use injected vars
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? undefined
          : 'apps/api/.env',
    }),
    ProjectsModule,
    ContactModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

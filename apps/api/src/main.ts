import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import type { Request, Response } from 'express';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pick up your VITE_API_URL from env in prod, or localhost in dev
  const config = app.get(ConfigService);
  const frontEndUrl =
    process.env.NODE_ENV === 'production'
      ? config.get<string>('VITE_API_URL')
      : 'http://localhost:3000';

  app.enableCors({
    origin: frontEndUrl,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
  return app.getHttpAdapter().getInstance(); // express handler
}

export default async function handler(req: Request, res: Response) {
  if (!server) {
    server = await bootstrap();
  }
  return server(req, res);
}

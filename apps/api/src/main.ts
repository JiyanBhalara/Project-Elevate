import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Only needed if you ever call external‐domain APIs
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.init();
  return app.getHttpAdapter().getInstance(); // Express handler
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (!server) {
    server = await bootstrap();
  }
  return server(req, res);
}

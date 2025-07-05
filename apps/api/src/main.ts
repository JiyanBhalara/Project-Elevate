// File: apps/api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import type { Request, Response } from 'express';

let server: import('express').Express;

async function bootstrap(): Promise<import('express').Express> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // --- CORS setup (unchanged) ---
  const apiUrl = configService.get<string>('VITE_API_URL') ?? '';
  let prodOrigin: string | undefined;
  try {
    prodOrigin = new URL(apiUrl).origin;
  } catch {
    prodOrigin = undefined;
  }
  const vercelPreviewPattern = /\.vercel\.app$/;

  // 1) Tell Nest all routes live under /api
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void
    ) => {
      if (!origin) return callback(null, true);
      if (
        origin === prodOrigin ||
        vercelPreviewPattern.test(origin) ||
        origin === 'http://localhost:4000'
      ) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked: ${origin}`), false);
    },
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })
  );

  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default async function handler(req: Request, res: Response) {
  if (!server) {
    server = await bootstrap();
  }
  server(req, res);
}

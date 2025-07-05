// File: apps/api/src/main.ts

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import type { Request, Response } from 'express';

let server: import('express').Express;

async function bootstrap(): Promise<import('express').Express> {
  const app = await NestFactory.create(AppModule);

  // 1) All controllers live under /api
  app.setGlobalPrefix('api');

  // 2) CORS (allow localhost in dev, or your Vercel URL via VITE_API_URL)
  app.enableCors({ origin: true, credentials: true });

  // 3) Validation, etc.
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })
  );

  // 4) Initialize but do not listen on a port
  await app.init();
  return app.getHttpAdapter().getInstance();
}

// This default export is what Vercel invokes as a lambda
export default async function handler(req: Request, res: Response): Promise<void> {
  if (!server) {
    server = await bootstrap();
  }
  return server(req, res);
}

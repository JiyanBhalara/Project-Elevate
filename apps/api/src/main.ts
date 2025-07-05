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

  // Read full API URL (e.g. https://your-app.vercel.app/api) from env
  const apiUrl = configService.get<string>('VITE_API_URL') ?? '';
  let prodOrigin: string | undefined;
  try {
    prodOrigin = new URL(apiUrl).origin;
  } catch {
    prodOrigin = undefined;
  }

  // Allow any preview deployment under *.vercel.app
  const vercelPreviewPattern = /\.vercel\.app$/;

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void
    ) => {
      // Allow server-to-server or tools with no origin header
      if (!origin) {
        return callback(null, true);
      }

      // Allow production origin, any vercel.app preview, and localhost dev
      if (
        origin === prodOrigin ||
        vercelPreviewPattern.test(origin) ||
        origin === 'http://localhost:3000'
      ) {
        return callback(null, true);
      }

      // Block all other origins
      return callback(
        new Error(`CORS policy blocked origin: ${origin}`),
        false
      );
    },
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default async function handler(
  req: Request,
  res: Response
): Promise<void> {
  if (!server) {
    server = await bootstrap();
  }
  server(req, res);
}

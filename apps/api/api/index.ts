// apps/api/api/index.js

import serverlessExpress from '@vendia/serverless-express';
import type {
  Handler,
  Context,
  Callback,
  APIGatewayProxyEvent,
} from 'aws-lambda';
import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';

let cachedHandler: Handler;

async function bootstrap(): Promise<Handler> {
  const app = express();
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(app));
  await nestApp.init();
  // you can also pass binaryMimeTypes here if needed
  return serverlessExpress({ app });
}

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  // ensure we have at least a minimal HTTP API v2 shape
  const ev = {
    ...event,
    version: (event as any).version ?? '2.0',
    requestContext: {
      // preserve any real requestContext fields...
      ...(event.requestContext ?? {}),
      // ...but guarantee there's an http object
      http: (event.requestContext as any)?.http || {
        method: event.httpMethod || 'GET',
        path: event.path || '/',
        protocol: 'HTTP/1.1',
        sourceIp: '',
        userAgent: '',
      },
    },
  };

  cachedHandler ??= await bootstrap();
  return cachedHandler(ev as any, context, callback);
};

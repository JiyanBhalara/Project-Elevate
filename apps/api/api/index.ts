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
  return serverlessExpress({ app });
}

const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  // shim minimal HTTP API v2 shape so that vendia/serverless-express
  // never falls back to “unknown event source”
  const ev = {
    ...event,
    version: (event as any).version ?? '2.0',
    requestContext: {
      ...(event.requestContext ?? {}),
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

// **This** is the important line: default‐export your handler function:
export default handler;

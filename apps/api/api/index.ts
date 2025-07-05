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
  // —— SHIM the HTTP API v2 fields —— 
  // ensure rawPath and rawQueryString exist, 
  // and give requestContext.http a minimal fallback
  const ev: any = {
    ...event,
    // only set version if it wasn’t provided
    version: (event as any).version ?? '2.0',
    // this is the key – without rawPath, `.replace` will blow up
    rawPath: (event as any).rawPath ?? event.path ?? '/',
    rawQueryString: (event as any).rawQueryString ?? '',
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
  return cachedHandler(ev, context, callback);
};

// make sure your default export is the handler function
export default handler;

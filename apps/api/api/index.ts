// apps/api/api/index.ts

// ▶️ Replace the codegenie import with vendia:
-import serverlessExpress from '@codegenie/serverless-express';
+import serverlessExpress from '@vendia/serverless-express';

-import { Handler } from 'aws-lambda';    // keep this
+import type { Handler } from 'aws-lambda';

import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
-import { AppModule } from '../src/app.module';
+import { AppModule } from '../src/app.module';

let cached: Handler;

async function bootstrap(): Promise<Handler> {
  const app = express();
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(app));
  await nestApp.init();
 // Vendia returns a proper Lambda handler for any Node.js Lambda-like env
  return serverlessExpress({ app });
}

const handler: Handler = async (event, ctx, cb) => {
  cached ??= await bootstrap();
  return cached(event, ctx, cb);
};

export default handler;

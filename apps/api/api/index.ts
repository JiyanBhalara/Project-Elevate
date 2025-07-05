import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';

let cached: Handler | undefined;

async function bootstrap(): Promise<Handler> {
  const app = express();
  const nest = await NestFactory.create(AppModule, new ExpressAdapter(app));
  await nest.init();
  return serverlessExpress({ app });
}

const handler: Handler = async (event, ctx, cb) => {
  cached ??= await bootstrap();
  return cached(event, ctx, cb);
};
export default handler;

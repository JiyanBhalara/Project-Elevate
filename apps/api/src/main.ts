import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: /vercel\.app$/ });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // strips unknown properties
      forbidNonWhitelisted: true,
      transform: true,          // enables class-transformer
    }),
  );
  await app.listen(4000);
}
bootstrap();

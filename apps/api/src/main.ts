import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // apps/api/src/main.ts  (inside your bootstrap before app.init())
app.enableCors({
    origin: (
      incomingOrigin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void
    ) => {
      if (!incomingOrigin) {
        return callback(null, true);
      }

      const allowedOrigins: Array<string | RegExp> = [
        'https://project-elevate-web.vercel.app',
        /\.vercel\.app$/
      ];

      const isAllowed = allowedOrigins.some(o =>
        typeof o === 'string'
          ? incomingOrigin === o
          : o.test(incomingOrigin)
      );

      return isAllowed
        ? callback(null, true)
        : callback(
            new Error(`Not allowed by CORS: ${incomingOrigin}`),
            false
          );
    },
    methods: [
      'GET',
      'HEAD',
      'PUT',
      'PATCH',
      'POST',
      'DELETE',
      'OPTIONS'
    ],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
  });

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
